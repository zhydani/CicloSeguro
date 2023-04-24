import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

const ContactItem = ({contact}) => {
    return (
        <View style={styles.contactCon}>
            <View style={styles.imgCon}>
                <View style={styles.placeholder}>
                <Text style={styles.txt}>
                    {contact?.name[0].toUpperCase()}
                </Text>
                </View>
            </View>
            <View style={styles.contactDat}>
                <Text style={styles.name}>
                    {contact?.name}
                </Text>
                <Text style={styles.phoneNumber}>
                    {contact?.number}
                </Text>
            </View>
        </View>
    );
};

export default ContactItem;