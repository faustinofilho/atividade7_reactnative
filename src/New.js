import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import axios from 'axios';

const New = () => {

  const [products, setProducts] = useState([]);

  const route = useRoute();

  const navigation = useNavigation();

  const [produtor, setProdutor] = React.useState("");
  const [declarada, setAreaDeclarada] = React.useState("");
  const [vistoriada, setAreaVistoriada] = React.useState("");

  const saveForm = () => {
      if(produtor != '' && produtor != '' && produtor != ''){
        axios.post('http://10.0.2.2:3000/propriedades', {
            produtor: produtor,
            declarada: declarada,
            vistoriada: vistoriada
        })
        .then((res) => {
            if(res.status == 201){
                alert('Cadastro realizado com sucesso.');
                setProdutor('');
                setAreaDeclarada('');
                setAreaVistoriada('');
                navigation.navigate('Lista de Produtores', { res })
            }
          })
        .catch(function (error) {
            console.log(error);
        });
    } else {
        alert('Preenchar todos os dados.');
    }
  };

  return (
    <SafeAreaView style={{padding: 10}}>

    <TextInput
        style={styles.input}
        value={produtor}
        onChangeText={setProdutor}
        placeholder="Nome do produtor"
    />

    <TextInput
        style={styles.input}
        onChangeText={setAreaDeclarada}
        placeholder="Área Declarada"
        keyboardType="numeric"
    />

    <TextInput
        style={styles.input}
        onChangeText={setAreaVistoriada}
        placeholder="Área Vistoria"
        keyboardType="numeric"
    />

    <TouchableOpacity style={styles.botao} onPress={saveForm}>
      <Text style={{ color: "#fff" }}>Salvar</Text>
    </TouchableOpacity>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 7
    },
    botao: {
      padding: 10,
      borderWidth: 1,
      backgroundColor: '#00ccff',
      margin: 12,
      alignItems: 'center',
      borderRadius: 7
    }
});

export default New;