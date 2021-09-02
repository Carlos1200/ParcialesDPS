import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MathView from 'react-native-math-view';

const App = () => {
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    a: '',
    b: '',
    c: '',
  });

  const [resultado, setResultado] = useState({
    x1: 0,
    x2: 0,
  });
  const submit = () => {
    const a = Number(form.a);
    const b = Number(form.b);
    const c = Number(form.c);

    const exponente = Math.pow(b, 2);
    const argumento = exponente - 4 * a * c;
    if (argumento < 0) {
      setError('Numeros Imaginarios');

      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    const raiz = Math.sqrt(argumento);


    const x1 = (raiz - b) / 2;
    const x2 = (-raiz - b) / 2;

    setResultado({
      x1: x1.toFixed(2),
      x2: x2.toFixed(2),
    });
  };
  return (
    <View style={styles.container}>
      {error && <Text style={{color: 'red', fontSize: 16}}>{error}</Text>}
      <View style={styles.row}>
        <View style={styles.divInput}>
          <Text style={styles.label}>Valor A</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="A"
            placeholderTextColor="black"
            value={form.a}
            onChangeText={value => setForm({...form, a: value})}
          />
        </View>
        <View style={styles.divInput}>
          <Text style={styles.label}>Valor B</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="B"
            placeholderTextColor="black"
            value={form.b}
            onChangeText={value => setForm({...form, b: value})}
          />
        </View>
        <View style={styles.divInput}>
          <Text style={styles.label}>Valor C</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="C"
            placeholderTextColor="black"
            value={form.c}
            onChangeText={value => setForm({...form, c: value})}
          />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={submit}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <View style={styles.mathView}>
        <MathView
          style={styles.math}
          math={`x=\\frac{-(${form.b})\\pm\\sqrt{(${form.b})^2-4(${form.a})(${form.c})}}{2(${form.a})}`}
        />
        <MathView style={styles.respuesta} math={`x1=${resultado.x1}`} />
        <MathView style={styles.respuesta} math={`x2=${resultado.x2} `} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B7AA1',
  },
  row: {
    flexDirection: 'row',
  },
  divInput: {
    marginHorizontal: 30,
  },
  label: {
    fontSize: 20,
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
  mathView: {
    marginTop: 50,
  },
  math: {
    color: 'white',
    width: 300,
    height: 200,
  },
  respuesta: {
    color: 'white',
    width: 100,
    height: 50,
  },
});
