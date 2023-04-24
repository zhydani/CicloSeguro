// import Contacts from 'react-native-contacts';

export const getAllContacts = async () => {
    return Contacts.getAll();
};

export const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
};
