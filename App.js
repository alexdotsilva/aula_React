import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default function App() {
  const[base, setBase] = useState('');
  const[altura, setAltura] = useState('');
  const[area, setArea] = useState('');

  function calcularArea(){
    if(base>0 && altura>0){
      setArea((parseFloat(base)*parseFloat(altura))/2);
    }
    else{
      setArea('');
    }
  }
  return (
    <View style={styles.container}>
      <Text>Insira os dados abaixo para calcular a área do triângulo.</Text>
      
      <TextInput placeholder='Base' style={{height:40, textAlign:'center'}} keyboardType='numeric' value={base} onChangeText={(text)=>setBase(text)}/>

      <TextInput placeholder='Altura' style={{height:40, textAlign:'center'}} keyboardType='numeric' value={altura} onChangeText={(text)=>setAltura(text)}/>

      <TouchableOpacity style={styles.button} onPress={calcularArea}>
        <Text style={styles.buttonText}>Calcular Área</Text>
      </TouchableOpacity>

      <Text style={styles.areaText}>Área: <Text style={{ fontSize: 25, color: '#ffffff' }}>{area}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e261f3', // Fundo do container em #e261f3
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#5e34db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  areaText: {
    marginTop: 20,
    fontSize: 50,
    color: '#ffffff',
  },

});
