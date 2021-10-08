import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  numero1: string;
  numero2: string;
};

const schema = yup.object({
  numero1: yup.string().required('Es necesario'),
  numero2: yup.string().required('Es necesario'),
});

export const Multiplicar = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [resultado, setResultado] = useState<number>(0);
  const onSubmit = ({numero1, numero2}: FormData) => {
    const total = Number(numero1) * Number(numero2);

    setResultado(total);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={{fontSize: 25, marginBottom: 20, fontWeight: 'bold'}}>
        Multiplicar 2 Números
      </Text>
      <View style={styles.contenedorInput}>
        <View style={styles.contenedorlabel}>
          <Text style={styles.label}>Numero 1</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="numero1"
            defaultValue="0"
          />
          {errors.numero1 && <Text>{errors.numero1.message}</Text>}
        </View>
        <View style={styles.contenedorlabel}>
          <Text style={styles.label}>Numero 2</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="numero2"
            defaultValue="0"
          />
          {errors.numero2 && <Text>{errors.numero2.message}</Text>}
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={handleSubmit(onSubmit)}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Calcular</Text>
      </TouchableOpacity>

      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Resultado:{resultado}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorInput: {
    flexDirection: 'row',
  },
  contenedorlabel: {
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#112031',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginVertical: 40,
    borderRadius: 20,
  },
});
