import React, { useState } from 'react';
import { Text, View, StyleSheet, Image,  StatusBar, ScrollView } from 'react-native';
import doutor from './assets/doutor.jpg'
import doutor2 from './assets/doutor2.jpg'
import doutor3 from './assets/doutor3.jpg'
import { Searchbar } from 'react-native-paper';

export default function App() {
  const [search, setSearch] = useState();

const updateSearch = (search) => {
  setSearch(search);
};
  
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>Busca por especialistas</Text>
      <Searchbar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      style={styles.containerSearch}
      value={search}
    />

        <View style={styles.opcaoEspecialista}>
          <Image source={doutor} style={styles.imagemEspecialista}/> 
          <View style={styles.info}>
            <Text style={styles.paragraph}>Luis Carlos</Text>
            <Text style={styles.smallText}>Cardiologia</Text>
            <Text style={styles.smallText}>4 *</Text>
          </View>
        </View>

        <View style={styles.opcaoEspecialista}>
         <Image source={doutor2} style={styles.imagemEspecialista}/> 
          <View style={styles.info}>
            <Text style={styles.paragraph}>Pablo Mauricio</Text>
            <Text style={styles.smallText}>Ginecologia</Text>
            <Text style={styles.smallText}>5 *</Text>
          </View>
        </View>
        <View style={styles.opcaoEspecialista}>
          <Image source={doutor3} style={styles.imagemEspecialista}/> 
          <View style={styles.info}>
            <Text style={styles.paragraph}>Claudia Maria</Text>
            <Text style={styles.smallText}>Neurologista</Text>
            <Text style={styles.smallText}>4 *</Text>
          </View>
        </View>
        <StatusBar/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: '#f8f4f4',
    padding: 4,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#f0f8f8"
  },
  opcaoEspecialista:{
    width: 280,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#61c8f8',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imagemEspecialista:{
    width: 60,
    maxHeight: 60,
    borderRadius: 12
  },
  titulo:{
    fontSize: 20,
  },
  info:{
    flexDirection:'column',
    alignItems: "center"
  },
  smallText:{
    fontSize: 12,
    color: "#f0f8f8"
  },
  containerSearch:{
    padding: 4,
    width: 280,
  },

});
