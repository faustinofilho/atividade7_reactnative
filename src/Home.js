import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import Axios from 'axios';

const Home = () => {

  const [produtores, setProdutores] = useState([]);

  const route = useRoute();

  useEffect(() => {
    Axios.get("http://10.0.2.2:3000/propriedades").then((res) => {
      setProdutores(res.data)
    }).catch((erro) => alert("Erro ao solicitar os proprietarios: " + erro))
  }, [route.params?.res])

  const navigation = useNavigation();


  return (
    <SafeAreaView style={{padding: 10}}>

      <TouchableOpacity style={styles.botaoproprietario} onPress={() => navigation.navigate('Novo Proprietario')}>
        <Text style={{ fontSize: 15, color: "#fff" }}>Nova Produtores Rural</Text>
      </TouchableOpacity>

      <FlatList
        style={{ marginTop:10 }}
        keyExtractor={(item, index) => item.id.toString()}
        data={produtores}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Editar Proprietario', { proprietario: item })} style={styles.eOpacity}>

            <View style={{ padding: 15, marginTop: 10}}>
              <Text><Text style={{fontWeight: '700'}}>Nome do Proprietario:</Text> <Text style={{fontWeight: '700', color: '#ccaadd'}}>{item.produtor}</Text></Text>
              <Text style={{fontWeight: '700', marginTop: 10 }}><Text style={{fontWeight: '700'}}>Área Declarada:</Text> <Text style={{fontWeight: '700', color: '#ccaadd'}}>{item.declarada}</Text></Text>
              <Text style={{fontWeight: '700', marginTop: 10 }}><Text style={{fontWeight: '700'}}>Área Vistoria:</Text> <Text style={{fontWeight: '700', color: '#ccaadd'}}>{item.vistoriada}</Text></Text>
            </View>

          </TouchableOpacity>

        )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 12,
    alignItems: 'center',
    borderRadius: 7
  },
  botaoproprietario: {
    padding: 10,
    backgroundColor: '#00ccff',
    alignItems: 'center',
    marginBottom: 5
  },
  eOpacity: {
    flexDirection: "row",
    backgroundColor: 'white',
    marginBottom: 5,
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10
  }
  });


export default Home;