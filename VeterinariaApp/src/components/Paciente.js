import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import FormularioPaciente from './PacienteE'
const Paciente = ({ item, pacientes, setPacientes }) => {
    const { paciente, propietario } = item
    const [modalVisible, setModalVisible] = useState(false);

    function deleteThis(event) {
        const nuevosPacientes = pacientes.filter(thisItem => thisItem.id !== item.id)
        setPacientes([...nuevosPacientes])
    }
    function onPress(event) {
        setModalVisible(true);
    }
    return (
        <View style={styles.contenedorPac}>
            <Text style={styles.subtitulo}>Paciente: {paciente}</Text>
            <Text style={styles.subtitulo}>Propietario: {propietario}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btnEditPac} onPress={onPress}
                    activeOpacity={0.8} >
                    <Text style={styles.btnTextEditPac}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnEditPac} onPress={deleteThis}
                    activeOpacity={0.8} >
                    <Text style={styles.btnTextEditPac}>Eliminar</Text>
                </TouchableOpacity>
            </View>
            <FormularioPaciente
                modalVisible={modalVisible} setModalVisible={setModalVisible}
                editarPaciente={item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorPac: {
        backgroundColor: '#543768',
        textAlign: 'center',
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,

    },
    subtitulo: {
        fontSize: 30,
        color: '#878686',
        fontWeight: '100',
        textAlign: 'center'
    },
    btnEditPac: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginVertical: 5,
        width: '45%'

    },
    btnTextEditPac: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default Paciente