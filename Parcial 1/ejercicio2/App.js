import React,{useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import Calculo from './src/components/Calculo';
import Form from './src/components/Form'

const App = () => {

  const [values, setValues] = useState({
    nombre:'',
    salario:null
  });
  const [submit, setSubmit] = useState(false);

  return (
    <ScrollView style={{backgroundColor:'#E5DFDF',flex:1}}>
      <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',marginTop:15}}>Cotizador</Text>
      <Form values={values} setValues={setValues} setSubmit={setSubmit} />
      {submit?<Calculo values={values} />:null}
    </ScrollView>
  )
}


export default App
