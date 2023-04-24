import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderComponent from "../../components/HeaderComponent";
import Alert from '../../components/default/alert/Alert';
import Load from '../../components/default/load/Load';
import styles from './Styles';


const HomeContent = () => {

  // Alert 
  const [controlAlert, setControlAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState(null);
  const [iconAlert, setIconAlert] = useState(null);
  const [iconColorAlert, setIconColorAlert] = useState(null);

  // Load
  const [load, setLoad] = useState(true)

  // data para inserir no firebase
  const [dateTime, setDateTime] = useState(new Date().toISOString());

  // localizacao expo location
  const [location, setLocation] = useState(null);
  
  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const { coords } = await Location.getCurrentPositionAsync();
        setLocation(coords);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  
  console.log(location);
  
  const handleButtonPress = async () => {
    const contacts = await getSavedContacts();
    // Obter as coordenadas de latitude e longitude do dispositivo
    // Geolocation.getCurrentPosition(
    //   position => {
    //     setLoad(true);
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //     // const lat = position.coords.latitude;
    //     // const lon = position.coords.longitude;

    //     // Criar uma mensagem formatada com um link do Google Maps
    //     const message = `Socorro! Estou em perigo. Minha localização é:\n\nMinha localização atual: https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    //     // Abrir o aplicativo do WhatsApp e compartilhar a mensagem formatada
    //     const contactsWithPhone = contacts.filter((c) => c?.phoneNumbers && c?.phoneNumbers.length > 0);
    //     const numbers = contactsWithPhone.map((c) => c?.phoneNumbers[0].number);
        
    //     setLoad(true);
        
    //     try {
    //       if(position){
    //         // Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}&phone=${numbers.join(',')}`);
    //         console.log(message + " numeros enviados:  " + numbers.join(','))
    //         setLabelAlert('Mensagens enviadas');
    //         setIconAlert('send');
    //         setIconColorAlert('#FF5D8F');
    //         setControlAlert(true);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       setLabelAlert('Erro ao enviar mensagem');
    //       setIconAlert('error');
    //       setIconColorAlert('red');
    //       setControlAlert(true);
    //     }
        
    //     setLoad(false);
    //   },
    //   error => alert(error.message),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    // );
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
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
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
