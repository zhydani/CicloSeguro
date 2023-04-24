import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from "../../components/HeaderComponent";
import Alert from '../../components/default/alert/Alert';
import ListEmpty from '../../components/default/empty/ListEmpty';
import ModalContacts from './ModalContacts';
import styles from './StylesIndex';


function ContactManageContent() {
  // Contact list
  const [contacts, setContacts] = useState([]);
  
  // Alert 
  const [controlAlert, setControlAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState(null);
  const [iconAlert, setIconAlert] = useState(null);
  const [iconColorAlert, setIconColorAlert] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contacts = await AsyncStorage.getItem('@contacts');
        if (contacts !== null) {
          setContacts(JSON.parse(contacts));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  
  const iconAlertSuccess = () => {
    setIconAlert('check');
    setIconColorAlert('green');
  }

  const iconAlertError = () => {
    setIconAlert('close');
    setIconColorAlert('red');
  }

  const handleAddContact = async (newContact) => {
    const contactExists = contacts.find(
      contact => contact.recordID === newContact.recordID
    );
    
    if (contactExists) {
      setLabelAlert('Contato já cadastrado');
      iconAlertError();
      setControlAlert(true);
      return;
    }

    setContacts([...contacts, newContact]);

    try {
      await AsyncStorage.setItem('@contacts', JSON.stringify([...contacts, newContact]));
      setLabelAlert('Contato cadastrado');
      iconAlertSuccess();
    } catch (error) {
      setLabelAlert(error);
      iconAlertError();
    }
    
    setControlAlert(true);
  };

  const handleRemoveContact = async (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);

    try {
      await AsyncStorage.setItem('@contacts', JSON.stringify(newContacts));
      setLabelAlert('Contato excluído');
      iconAlertSuccess();
    } catch (error) {
      setLabelAlert(error);
      iconAlertError();
    }
    
    setControlAlert(true);
  };

  return (
    <View style={styles.container}>
      <Alert 
        controlAlert={controlAlert} 
        label={labelAlert}
        nameIcon={iconAlert}
        colorIcon={iconColorAlert}
        onPress={() => setControlAlert(!controlAlert)}
      />
      <FlatList
        style={styles.list}
        data={contacts}
        ListEmptyComponent={ () => {
            return <ListEmpty />
        }}
        renderItem={({ item, index }) => (
          <View style={styles.contactCon}>
            <View style={styles.contactGroup}>
              <View style={styles.imgCon}>
                  <View style={styles.placeholder}>
                  <Text style={styles.txt}>{item?.givenName[0]}</Text>
                  </View>
              </View>
              <View style={styles.contactDat}>
                  <Text style={styles.name}>
                  {item?.givenName} {item?.middleName && item.middleName + ' '}
                  {item?.familyName}
                  </Text>
                  <Text style={styles.phoneNumber}>
                  {item?.phoneNumbers[0]?.number}
                  </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.contactIcon} onPress={() => handleRemoveContact(index)}>
              <Icon name="trash" size={25} color="red"/>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
        <ModalContacts onAddContact={handleAddContact} />
    </View>
  );
};

function ContactManageScreen({navigation}) {
  return (
    <HeaderComponent subheader="Contatos" content={<ContactManageContent />} navigation={navigation}/>
  );
};

export default ContactManageScreen;
