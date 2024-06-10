import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';


const DateTime = () => {
    return (
        <>
            <FlatList
                data={['a', 'b', 'c', 'd', 'e', 'f']}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20

                }}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.dias,
                            { backgroundColor: item == 'a' ? '#fe0000' : undefined }
                        ]}
                        key={item}
                    >
                        <Text style={{ color: item == 'a' ? '#fff' : '#dfdddd' }}>19</Text>
                        <Text style={{ color: item == 'a' ? '#fff' : '#dfdddd' }}>Ter</Text>
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.escolhaHorario}>
                Escolha o Horário:
            </Text>

            <FlatList
                data={[
                    ['14:30', '15:00'],
                    ['15:30', '16:00'],
                    ['16:30', '17:00'],
                    ['17:30'],
                ]}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                renderItem={({ item }) => (
                    <View>
                        {item.map(horario => (
                            <TouchableOpacity
                                key={horario}
                                style={[
                                    styles.horarios,
                                    { backgroundColor: horario == '14:30' ? '#fe0000' : '#d9d9d9' }
                                ]}
                            >
                                <Text style={{ color: horario == '14:30' ? '#fff' : '#000' }}>{horario}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    
                )}
            />

            <Text style={styles.escolhaHorario}>
                Quantidade de Pessoas:
            </Text>

            <FlatList
                data={['a', 'b', 'c', 'd']}
                horizontal
                scrollEnabled = {false}
                contentContainerStyle={{
                    paddingLeft: 20,
                    paddingRight: 20

                }}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.qtdPessoas,
                            { backgroundColor: item == 'a' ? '#fe0000' :  '#373539' }
                        ]}
                        key={item}
                    >
                        <AntDesign name="arrowleft"/>
                        <Text style={{ color: item == 'a' ? '#fff' : '#fff' }}>4+</Text>
                    </TouchableOpacity>
                )}
            />


            
        </>
    );
}

export default DateTime;

const styles = StyleSheet.create({
    dias: {
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        margin: 5,
    },
    horarios: {
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5
    },
    escolhaHorario: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 25,
        paddingTop: 25,
        paddingBottom: 10
    },
    qtdPessoas: {
        width: 75,
        height: 75,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#a99c9c'

    }
});
