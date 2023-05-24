import * as Contacts from 'expo-contacts';
import React, { useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IconClose from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

  useEffect(() => {
    if (!modalVisible) {
      setSearchText('');
    }
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync() || {};
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: ['phoneNumbers']
        });

        if (data && data.length > 0) {
          const contacts = data.map(contact => {
            if(contact.phoneNumbers && contact.phoneNumbers.length > 0){
              return {
                id: contact.id,
                name: contact.name,
                number: contact.phoneNumbers[0].digits,
              };
            }else{
              return {
                id: contact.id,
                name: contact.name,
                number: "Sem número",
              };
            }
          })
          setContacts(contacts);
        }
      }
    })();
  }, [modalVisible]);

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
        onPress={openContactsModal}
        testID="add-contact-button"
      >
        <Text style={styles.textStyle}><Icon name="plus" size={20} color="white"/> Adicionar Contato</Text>
      </Pressable>
      <Modal style={styles.centeredView} animationType="slide" visible={modalVisible} transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)} testID='close-modal-button'>
                <IconClose name="close" size={25} color="black"/>
            </TouchableOpacity>
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
              onPress={() => setModalVisible(false)} testID='fechar-modal-button'>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalContacts;
