import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
 
function Alert({controlAlert, label, onPress, size, nameIcon, colorIcon}) {

    const [control, setControl] = useState(false)

    useEffect(() => {
        setControl(controlAlert)
    }, [controlAlert])
    
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={control}
            style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.closeBtn} onPress={() => onPress()}>
                        <Icon name="close" size={25} color="black"/>
                    </TouchableOpacity>
                    <Text style={styles.iconAlert}>
                        <FontAwesome name={nameIcon} size={50} color={colorIcon}/>
                    </Text>
                    <Text style={styles.label} size={size}>
                        {label}
                    </Text>
                </View>
            </View>
        </Modal>
    )
        
}

export default Alert;