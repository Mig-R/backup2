import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function RegisterRest() {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleSignup = async () => {
        if (!name || !email || !pass || !confirmPass || !cnpj || !cep) {
            Alert.alert("Preencha todos os campos");
            return;
        }
        if (pass !== confirmPass) {
            Alert.alert("As senhas não conferem");
            return;
        }

        try {
            const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
            if (!response.ok) {
                throw new Error('CEP inválido');
            }
            const data = await response.json();
            if (!data.cep) {
                Alert.alert('Erro', 'CEP inválido');
                return;
            }

            navigation.navigate('Endereco', {
                name,
                email,
                cnpj,
                cep,
                pass,
                confirmPass
            });
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Não foi possível obter os dados do CEP');
        }
    }


    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Registro Restaurante</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite o Nome do Restaurante"
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                />

                <Text style={styles.title}>CNPJ</Text>
                <TextInput
                    placeholder="CNPJ"
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={setCnpj}
                />

                <Text style={styles.title}>CEP</Text>
                <TextInput
                    placeholder="CEP"
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={setCep}
                    value={cep}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email"
                    style={styles.input}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={setPass}
                />
                <Text style={styles.title}>Confirmação de senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={setConfirmPass}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SignInRest')}>
                    <Text style={styles.registerText}>Já possui uma conta? Entre</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </Animatable.View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    }
});
