import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Resultado = ({resultado}) => {
  const {numeroMax, numeroMin, condicion1, condicion2} = resultado;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.info}>Numero Más Grande: {numeroMax}</Text>
      <Text style={styles.info}>Numero Más Pequeño: {numeroMin}</Text>
      {condicion1 && (
        <Text style={styles.info}>
          Sumarle 10 al numero mayor: {condicion1}
        </Text>
      )}
      {condicion2 && (
        <Text style={styles.info}>
          Restarle 5 al numero menor: {condicion2}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  info: {
    fontSize: 20,
    color: 'white',
  },
});
