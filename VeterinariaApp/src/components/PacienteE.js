import React, { useState } from 'react';
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView, Text, TextInput, View, Alert
} from 'react-native';


function FormularioPaciente({ modalVisible, setModalVisible, editarPaciente }) {
    const [paciente, setPaciente] = useState(editarPaciente.paciente);
    const [propietario, setPropietario] = useState(editarPaciente.propietario);
    const [email, setEmail] = useState(editarPaciente.email);
    const [telefono, setTelefono] = useState(editarPaciente.telefono);
    const [sintomas, setSintomas] = useState(editarPaciente.sintomas);

    function cancelarModal(_GestureResponderEvent) {
        setModalVisible(false);
    }

    function ActPaciente(_GestureResponderEvent) {

        if ([paciente, propietario, email, sintomas].includes('')) {
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return
        }

        editarPaciente.paciente = paciente;
        editarPaciente.propietario = propietario;
        editarPaciente.email = email;
        editarPaciente.telefono = telefono;
        editarPaciente.sintomas = sintomas;

        setModalVisible(!modalVisible)
    }


    return (
        <Modal
            animationType='slide'
            visible={modalVisible}>

            <SafeAreaView style={styles.contenedor}>
                <ScrollView>
                    <View>
                        <TouchableOpacity
                            onLongPress={cancelarModal}
                            style={styles.btnCitas}
                            activeOpacity={0.8}  >
                            <Text style={styles.btnTextCitas}>Cancelar</Text>
                        </TouchableOpacity>
                        <Text style={styles.subtitulo}>
                            Nombre paciente
                        </Text>
                        <TextInput
                            value={paciente}
                            onChangeText={setPaciente}
                            keyboardType='default'
                            style={styles.input}
                        ></TextInput>
                        <Text style={styles.subtitulo}>
                            Nombre propietario
                        </Text>
                        <TextInput
                            value={propietario}
                            onChangeText={setPropietario}
                            keyboardType='default'
                            style={styles.input}
                        ></TextInput>
                        <Text style={styles.subtitulo}>
                            Email
                        </Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                            style={styles.input}
                        ></TextInput>
                        <Text style={styles.subtitulo}>
                            Telefono
                        </Text>
                        <TextInput
                            value={telefono}
                            onChangeText={setTelefono}
                            keyboardType='number-pad'
                            style={styles.input}
                        ></TextInput>
                        <Text style={styles.subtitulo}>
                            Sintomas
                        </Text>
                        <TextInput
                            value={sintomas}
                            onChangeText={setSintomas}
                            keyboardType='default'
                            style={styles.input}
                            multiline={true}
                            numberOfLines={5}
                        ></TextInput>
                        <TouchableOpacity
                            activeOpacity={0.8} style={styles.btnCitas} onPress={ActPaciente}>
                            <Text style={styles.btnTextCitas}>Actualizar Paciente</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1ec5e3',
        textAlign: 'center',
        flex: 1

    },
    titulo: {
        fontSize: 30,
        color: '#00aa00',
        fontWeight: '900',
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 30,
        color: '#878686',
        fontWeight: '500',
        textAlign: 'center'
    },
    btnCitas: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 20,
        marginVertical: 20
    },
    btnTextCitas: {
        fontSize: 18,
        color: "#f6f6f6",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    input: {
        backgroundColor: '#f6f6f6',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    }
});

export default FormularioPaciente;