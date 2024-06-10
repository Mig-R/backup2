import React from "react";
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native';
import DateTime from "./dateTime"

export default function ReservaMesa () {

    const navigation = useNavigation();


    return(
    <SafeAreaView style={styles.container}>
        
            <View style={styles.containerLogo}>
                {/* Exibindo a imagem do logo */}
                <Image
                    source={require('./outbackBanner.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

                {/* Botão de voltar para a esquerda no canto superior esquerdo do logo */}
                <TouchableOpacity style={styles.return} onPress={() => navigation.navigate('DetailsCli')}>
                    <AntDesign name="arrowleft" style={styles.return} />
                </TouchableOpacity>
            </View>
    <ScrollView>
        <View>
            <Text style={styles.escolhaDia}>Escolha o Dia:</Text>
        <DateTime/>
        </View>

        </ScrollView>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#141414'
    },
    containerLogo: {
        flex: 0.3,
        justifyContent: 'center',
        paddingBottom: 50
    },
    return: {
        position: 'absolute',
        top: 5,
        left: 5,
        fontSize: 34,
        color: '#fff',
        zIndex: 1,
    },
    escolhaDia:{
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25,
        paddingTop: 40,
        paddingBottom: 10
    }

})