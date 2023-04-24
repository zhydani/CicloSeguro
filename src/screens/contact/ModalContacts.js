import React, { useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAllContacts, keyExtractor } from '../../controllers/ContactController';
// import requestContactsPermission from "../../utils/ContactPermission";
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
    // requestContactsPermission();
    getAllContacts().then(contacts => {
      if (contacts.length > 0) {
        setContacts(contacts);
      }
    })
  }, []);

  function openContactsModal() {
    setModalVisible(true);
  };
  
  const renderItem = ({item, index}) => {
    if (!searchText || item?.givenName.toLowerCase().includes(searchText.toLowerCase())) {
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
