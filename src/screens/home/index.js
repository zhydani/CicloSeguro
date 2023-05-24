import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import * as Location from 'expo-location';
import { addDoc, collection } from "firebase/firestore";
import * as geofire from 'geofire-common';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from "../../components/HeaderComponent";
import Alert from '../../components/default/alert/Alert';
import Load from '../../components/default/load/Load';
import db from '../../config/firebaseconfig';
import styles from './Styles';

const colRef = collection(db, "ocorrencias");

// getDocs(colRef)
//     .then((snapshot) => {
//       let collection = []
//       snapshot.docs.forEach((doc) => {
//           collection.push({...doc.data(), id: doc.id })
//           console.log(collection)
//        })
//     })


const HomeContent = () => {
  // Alert 
  const [controlAlert, setControlAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState(null);
  const [iconAlert, setIconAlert] = useState(null);
  const [iconColorAlert, setIconColorAlert] = useState(null);

  
  

  // Load
  const [load, setLoad] = useState(false)

  // data para inserir no firebase
  const [dateTime, setDateTime] = useState(new Date().toISOString());
  
  useEffect(() => {
    
  }, []);

  function messageWhatsapp(latitude, longitude){
    const message = `Socorro! Estou em perigo.\n\nMinha localização é: https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return message;
  }

  // gera localizacao aleatoria
  function generateRandomLocation() {
    // Define a faixa de latitude e longitude para Palmas, Tocantins
    const latMin = -10.2600597;
    const latMax = -10.1689;
    const longMin = -48.3472344;
    const longMax = -48.32766;
  
    // Gera números aleatórios dentro da faixa de latitude e longitude
    const lat = Math.random() * (latMax - latMin) + latMin;
    const long = Math.random() * (longMax - longMin) + longMin;
  
    // Retorna um objeto com as coordenadas da localização aleatória gerada
    return { latitude: lat, longitude: long };
  }
  
  // const handleButtonPress = async () => {
  //   setLoad(true);
  //   const location = await getLocation();
    
  //   const contacts = await getSavedContacts();
  //   const numbers = contacts.map((c) => c?.number);
  //   const hash = geofire.geohashForLocation([location.latitude, location.longitude]);
    
  //   let url = `whatsapp://send?text=${encodeURIComponent(messageWhatsapp(location.latitude, location.longitude))}&phone=${numbers.join(',')}`;
  //   setLabelAlert('Mensagem enviada');
  //   setIconAlert('send');
  //   setIconColorAlert('#FF5D8F');
  //   setControlAlert(true);
  //   Linking.openURL(url);

  //   const data = {
  //     data: new Date(),
  //     descricao: "Essa é uma ocorrência de teste",
  //     geohash: hash,
  //     latitude: location.latitude,
  //     longitude: location.longitude,
  //   };

  //   addDoc(colRef, data)
  //     .then((docRef) => {
  //       console.log("Documento adicionado com sucesso:", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao adicionar documento:", error);
  //     });
  // };

  // botao de teste com localizacao ramdomica
  const handleButtonPress = async () => {
    const contacts = await getSavedContacts();
    const numbers = contacts.map((c) => c?.number);
    const randomLocation = generateRandomLocation();
    const hash = geofire.geohashForLocation([randomLocation.latitude, randomLocation.longitude]);
    
    let url = `whatsapp://send?text=${encodeURIComponent(messageWhatsapp(randomLocation.latitude, randomLocation.longitude))}&phone=556399959865`;
    setLabelAlert('Mensagem enviada');
    setIconAlert('send');
    setIconColorAlert('#FF5D8F');
    setControlAlert(true);
    Linking.openURL(url);

    const data = {
      data: new Date(),
      descricao: "Essa é uma ocorrência de teste",
      geohash: hash,
      latitude: randomLocation.latitude,
      longitude: randomLocation.longitude,
    };

    addDoc(colRef, data)
      .then((docRef) => {
        console.log("Documento adicionado com sucesso:", docRef.id);
      })
      .catch((error) => {
        console.error("Erro ao adicionar documento:", error);
      });
  };

  async function getSavedContacts() {
    try {
      const contacts = await AsyncStorage.getItem('@contacts');
      if (contacts !== null) {
        return JSON.parse(contacts);
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async function getLocation() {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      setLoad(false);
      return coords;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  if (load) {
    return (
      <Load control={load} />
    );
  }

  return (
    <>
      <Alert 
        controlAlert={controlAlert} 
        label={labelAlert}
        nameIcon={iconAlert}
        colorIcon={iconColorAlert}
        onPress={() => setControlAlert(!controlAlert)}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress} testID='location-button'>
          <Icon name="location-pin" size={60} color="white"/>
        </TouchableOpacity>
      </View>
    </>
  );
};

function HomeScreen({navigation}) {

  return (
    <HeaderComponent subheader="Enviar Localização" content={<HomeContent />} navigation={navigation}/>
  );
};

export default HomeScreen;
