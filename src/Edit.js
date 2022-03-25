import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import axios from 'axios';

const Edit = () => {

  const [products, setProducts] = useState([]);

  const route = useRoute();

  const navigation = useNavigation();

  const [id, setId] = React.useState("");
  const [produtor, setProdutor] = React.useState("");
  const [declarada, setAreaDeclarada] = React.useState("");
  const [vistoriada, setAreaVistoriada] = React.useState("");


  useEffect(() => {
    const proprietario = route.params.proprietario;
    setProdutor(proprietario.produtor);
    setAreaDeclarada(proprietario.declarada);
    setAreaVistoriada(proprietario.vistoriada);
    setId(proprietario.id);
  }, [])

  const saveForm = () => {
      if(produtor != '' && produtor != '' && produtor != ''){
        axios.patch('http://10.0.2.2:3000/propriedades/' + id, {
            produtor: produtor,
            declarada: declarada,
            vistoriada: vistoriada
        })
        .then((res) => {

                alert('Registro alterado com sucesso.');
                navigation.navigate('Lista de Produtores', { res })

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
        value={declarada}
        onChangeText={setAreaDeclarada}
        placeholder="Área Declarada"
        keyboardType="numeric"
    />

    <TextInput
        style={styles.input}
        value={vistoriada}
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

export default Edit;