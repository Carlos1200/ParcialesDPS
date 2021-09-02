import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Calculo = ({values}) => {

    const {nombre,salario}=values;

    let deducciones=salario*0.03+salario*0.04+salario*0.05;

    const neto=salario-deducciones;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado</Text>


            <View style={styles.infoContainer}>
                <Text style={styles.subtitle}>Nombre: </Text>
                <Text style={styles.resultado}>{nombre}</Text>
            </View>
             <View style={styles.infoContainer}>
             <Text style={styles.subtitle}>Salario Base: </Text>
             <Text style={styles.resultado}>{salario}</Text>
            </View>
             <View style={styles.infoContainer}>
             <Text style={styles.subtitle}>Deducciones: </Text>
                <Text style={styles.resultado}>{deducciones}</Text>
            </View>
             <View style={styles.infoContainer}>
             <Text style={styles.subtitle}>Salario Neto: </Text>
                <Text style={styles.resultado}>{neto}</Text>
            </View>



        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal:50
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center'
    },
    infoContainer:{
        marginVertical:15,
        flexDirection:'row',
        alignItems:'center'
    },
    subtitle:{
        fontSize:16,
        fontWeight:'bold'
    },
    resultado:{
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'700'
    }
})

export default Calculo
