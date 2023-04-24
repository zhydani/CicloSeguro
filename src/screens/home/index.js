import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
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

  
  // console.log(location);
  
  const handleButtonPress = async () => {
    const contacts = await getSavedContacts();
    const numbers = contacts.map((c) => c?.number);
    const message = `Socorro! Estou em perigo. Minha localização é:\n\nMinha localização atual: https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;

    console.log(numbers.join(','))
    
    let url = `whatsapp://send?text=${encodeURIComponent(message)}&phone=+5563999959865`;
    Linking.openURL(url);
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
