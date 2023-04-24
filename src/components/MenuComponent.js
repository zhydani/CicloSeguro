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
                <Divider style={{ marginBottom: 10 }} leadingInset={45} />
                <TouchableOpacity onPress={() => navigation.navigate('ContactManageScreen')}>
                    <View style={styles.menuItem}>
                        <Icon name="contacts" size={24} color="white" />
                        <Text style={styles.menuItemText}>Contatos</Text>
                    </View>
                </TouchableOpacity>
                {/* <Divider style={{ marginBottom: 10 }} leadingInset={45} /> */}
                {/* <View style={styles.menuItem}>
                    <IconSet name="settings-sharp" size={24} color="white" />
                    <Text style={styles.menuItemText}>Configurações</Text>
                </View> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menu:{
        padding: 4,
    },
    listItem:{
        backgroundColor: "#FF5D8F",
    },
    drawerContent: {
        padding: 20,
        backgroundColor: "#FF5D8F",
    },
    drawerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white",
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    menuItemText: {
        marginLeft: 16,
        fontSize: 18,
        color: "white",
    },
});

export default Menu;
  