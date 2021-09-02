import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { Resultado } from './src/Resultado';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [resultado, setResultado] = useState({
    numeroMin:0,
    numeroMax:0,
    condicion1:null,
    condicion2:null
  })
  const [mostrar, setMostrar] = useState(false)
  const onSubmit = data => {
    const {numero1,numero2,numero3,numero4}=data;
    let condicion1;
    let condicion2;
    const numeroMin=Math.min(numero1,numero2,numero3,numero4);
    const numeroMax=Math.max(numero1,numero2,numero3,numero4);

    if(numeroMin>10){
      condicion1=numeroMax+10;
    }
    if(numeroMax<50){
      condicion2=numeroMin-5;
    }

    setResultado({
      numeroMax,
      numeroMin,
      condicion1,
      condicion2
    });
    setMostrar(true);
  };
  return (
    <View style={styles.container}>
      {errors.numero1 || errors.numero2 || errors.numero3 || errors.numero4 ? (
        <Text style={{color: 'red', fontSize: 16}}>Revisa tus datos</Text>
      ) : null}
      <View style={styles.row}>
        <View style={styles.divInput}>
          <Text style={styles.label}>Numero 1</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              min: 1,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="numero1"
            defaultValue=""
          />
        </View>
        <View style={styles.divInput}>
          <Text style={styles.label}>Numero 2</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              min: 1,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="numero2"
            defaultValue=""
          />
        </View>
        <View style={styles.divInput}>
          <Text style={styles.label}>Numero 3</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              min: 1,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="numero3"
            defaultValue=""
          />
        </View>
        <View style={styles.divInput}>
          <Text style={styles.label}>Numero 4</Text>
          <Controller
            control={control}
            rules={{
              required: true,
              min: 1,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="numero4"
            defaultValue=""
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {mostrar&&<Resultado resultado={resultado} />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C527F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  divInput: {
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 15,
  },
});
