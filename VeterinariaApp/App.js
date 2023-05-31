import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

function App() {
  function onPress(_event) {
    setModalVisible(true);
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([])
  return (
    <SafeAreaView style={styles.contenedor} >
      <Text style={styles.titulo} >Administración de citas</Text>
      <Text style={styles.subtitulo}>Veterinaria</Text>
      <TouchableOpacity
        activeOpacity={0.8} style={styles.btnNuevaCita} onPress={onPress}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </TouchableOpacity>
      <Formulario
        modalVisible={modalVisible} setModalVisible={setModalVisible}
        pacientes={pacientes} setPacientes={setPacientes}
      />
      {
        pacientes.length === 0 ?
          <Text style={styles.subtitulo}>No hay pacientes</Text> :
          <FlatList
            data={pacientes}
            renderItem={({ item }) => {
              return (
                <View> 
                  <Paciente
                    item={item}
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                  />
                </View>
              )
            }}
            keyExtractor={(item) => item.id}
          />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#2f30a1',
    textAlign: 'center',
    flex: 1

  },
  titulo: {
    fontSize: 30,
    color: '#1e1f1e',
    fontWeight: '900',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 30,
    color: '#878686',
    fontWeight: '500',
    textAlign: 'center'
  },
  btnNuevaCita: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 20
  },
  btnTextNuevaCita: {
    fontSize: 18,
    color: "#f6f6f6",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;
