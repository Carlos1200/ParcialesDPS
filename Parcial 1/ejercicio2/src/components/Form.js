import React,{useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Form = ({values,setValues,setSubmit}) => {
    const [error, setError] = useState(null);
    const onChange=(value,campo)=>{
        setValues({
            ...values,
            [campo]:value
        })
    }

    const onSubmit=()=>{
        if(values.nombre==='' || !values.salario){
            setError('Debe de llenar todos los campos');
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        }
        setSubmit(true);
    }
    return (
        <View style={styles.container}>
            {error?(
                <View style={{marginVertical:15}}>
                    <Text style={{fontSize:15, fontWeight:'bold',textAlign:'center',color:'red'}}>{error}</Text>
                </View>
            ):null}
            <Text style={styles.Label}>Nombre</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                placeholderTextColor="black"
                onChangeText={(value)=>onChange(value,'nombre')}
            />
            <Text style={styles.Label}>Salario</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su Salario"
                placeholderTextColor="black"
                keyboardType="number-pad"
                onChangeText={(value)=>onChange(value,'salario')}
            />
            <TouchableOpacity 
                activeOpacity={0.8}
                style={styles.buttom}
                onPress={onSubmit}
            >
                <Text style={styles.textButtom}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:30
    },
    Label:{
        fontSize:16,
        fontWeight:'bold',
        marginVertical:15
    },
    input:{
        borderWidth:1,
        borderRadius:15,
        fontSize:16,
        color: 'black',
        paddingHorizontal:15
    },
    buttom:{
        backgroundColor:'#465881',
        marginVertical:20,
        paddingVertical:15,
        borderRadius:30
    },
    textButtom:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color: 'white'
    }
})

export default Form
