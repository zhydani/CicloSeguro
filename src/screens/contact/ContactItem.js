import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

const ContactItem = ({contact}) => {
    return (
        <View style={styles.contactCon}>
            <View style={styles.imgCon}>
                <View style={styles.placeholder}>
                <Text style={styles.txt}>{contact?.givenName[0]}</Text>
                </View>
            </View>
            <View style={styles.contactDat}>
                <Text style={styles.name}>
                {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
                {contact?.familyName}
                </Text>
                <Text style={styles.phoneNumber}>
                {contact?.phoneNumbers[0]?.number}
                </Text>
            </View>
        </View>
    );
};

export default ContactItem;