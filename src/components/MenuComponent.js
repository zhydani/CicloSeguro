import {
    Divider
} from "@react-native-material/core";
import { React } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
  
function Menu({ navigation }) {
    return (
        <View style={styles.menu}>
            <View style={styles.drawerContent}>
                <Text style={styles.drawerText}>Menu</Text>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={styles.menuItem}>
                        <Icon name="home" size={24} color="white" />
                        <Text style={styles.menuItemText}>Tela Inicial</Text>
                    </View>
                </TouchableOpacity>
                <Divider style={{ marginBottom: 10 }} leadingInset={40} />
                <TouchableOpacity onPress={() => navigation.navigate('ContactManageScreen')}>
                    <View style={styles.menuItemContact}>
                        <Icon name="contacts" size={24} color="white" />
                        <Text style={styles.menuItemText}>Contatos</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menu:{
        padding: 4,
        paddingTop: 0
    },
    listItem:{
        backgroundColor: "#FF5D8F",
    },
    drawerContent: {
        padding: 20,
        backgroundColor: "#FF5D8F",
    },
    drawerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    menuItemContact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    menuItemText: {
        marginLeft: 16,
        fontSize: 20,
        color: "white",
    },
});

export default Menu;
  