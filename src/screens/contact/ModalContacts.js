import * as Contacts from 'expo-contacts';
import React, { useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { keyExtractor } from '../../controllers/ContactController';
import ContactItem from './ContactItem';
import styles from './Styles';
// import Load from '../../components/default/load/Load';


function ModalContacts({ onAddContact }) {
  // modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // contacts list
  const [contacts, setContacts] = useState([]);

  // search
  const [searchText, setSearchText] = useState('');
  
  // load
  // const [load, setLoad] = useState(true)

  function handleAddContact (newContact) {
    onAddContact(newContact);
    setModalVisible(false);
  }

  function handleSearch(text) {
    setSearchText(text);
  }

  function formatPhoneNumber(number) {
    if (number.length === 11) {
      return `(${number.substring(0, 2)}) ${number.substring(2, 7)}-${number.substring(7)}`;
    }
    if (number.length === 12 && number.startsWith('0')) {
      return `(${number.substring(1, 3)}) ${number.substring(3, 8)}-${number.substring(8)}`;
    }
    if (number.startsWith('+55')) {
      number = number.substring(3);
      if (number.length === 10) {
        return `(${number.substring(0, 2)}) ${number.substring(2, 6)}-${number.substring(6)}`;
      }
      if (number.length === 11) {
        return `(${number.substring(0, 2)}) ${number.substring(2, 7)}-${number.substring(7)}`;
      }
      if (number.length === 12 && number.startsWith('0')) {
        return `(${number.substring(1, 3)}) ${number.substring(3, 8)}-${number.substring(8)}`;
      }
    }
    if (number.length === 8) {
      return `${number.substring(0, 4)}-${number.substring(4)}`;
    }
    if (number.length === 9) {
      return `${number.substring(0, 5)}-${number.substring(5)}`;
    }
    return number;
  }

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
          sort: true
        });

        if (data && data.length > 0) {
          const contacts = data.map(contact => {
            if(contact.phoneNumbers){
              return {
                name: contact.name,
                number: formatPhoneNumber(contact.phoneNumbers[0].digits),
              };
            }else{
              return {
                name: contact.name,
                number: "Sem número",
              };
            }
          })
          setContacts(contacts);
        }
      }
    })();
  }, []);

  function openContactsModal() {
    setModalVisible(true);
  };
  
  const renderItem = ({item}) => {
    if (!searchText || item?.name.toLowerCase().includes(searchText.toLowerCase())) {
      return (
        <TouchableOpacity onPress={() => handleAddContact(item)}>
          <ContactItem contact={item} />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={openContactsModal}>
        <Text style={styles.textStyle}><Icon name="plus" size={18} color="white"/> Adicionar Contato</Text>
      </Pressable>
      <Modal style={styles.centeredView} animationType="slide" visible={modalVisible} transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputView}>
              <Ionicons name="search" size={20} color="#ccc" />
              <TextInput
                style={styles.input}
                onChangeText={handleSearch}
                value={searchText}
                placeholder="Buscar contato"
                keyboardType="default"
              />
            </View>
            <FlatList
              data={contacts}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              style={styles.list}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalContacts;
