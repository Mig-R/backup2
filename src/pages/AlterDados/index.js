import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;

export default function AlterDados() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/comida.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="repeat"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <View style={styles.container2}>
                        <View style={styles.name}>
                            <Text style={styles.title}>Alterar Dados</Text>
                        </View>
                    </View>
                    
                    <View>
                        <Text style={styles.text1}>Email Atual:</Text>
                        {/* <View>
                            <TextInput style={styles.textInput}>
                                placeholder="Digite o nome email"
                                onChangeText={newEmail => setText(newEmail)}
                                Value={Email}
                                autoCorrect={false}
                            </TextInput>
                        </View> */}
                    </View>
                    <View>
                        <Text style={styles.text1}>Novo Email:</Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>Senha Atual:</Text>
                    </View>
                    <View>
                        <Text style={styles.text1}>Nova Senha:</Text>
                    </View>
            
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.btnStyle}>
                            <Text style={styles.btnText}>Salvar Alterações</Text>
                        </TouchableOpacity>
                    </View>
                
                </ScrollView>
            
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        margin: 40,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '#a2a2a2',
        borderRadius: 10,
    },
    containerLogo: {
        flex: 0.1,
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 3,
        borderBottomColor: '#141414',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderTopColor: '#fff',
        paddingEnd: '5%',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        paddingStart: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    subTitle: {
        color: '#a2a2a2',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 5,
        paddingStart: '3%',
    },
    text1: {
        color: '#fff',
        fontSize: 17,
        padding: 25,
        paddingStart: '5%',
    },
    btnStyle: {
        backgroundColor: '#8E1515',
        borderRadius: 10,
        padding: 10,
        width: '70%',
        justifyContent: 'flex-end'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    textInput: {
        color: '#fff',
        fontSize: 17,
        padding: 25,
        paddingStart: '5%',
    },
})