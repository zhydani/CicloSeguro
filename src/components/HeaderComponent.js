import {
    AppBar,
    Backdrop,
    BackdropSubheader, IconButton,
    Surface
} from "@react-native-material/core";
import { React, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuComponent from "./MenuComponent";
  
function Header({ content, subheader, navigation }) {
const [revealed, setRevealed] = useState(false);
    return (
        <Backdrop
        revealed={revealed}
        style={styles.header}
        header={
            <SafeAreaView>
                <AppBar
                    title="Ciclo Seguro"
                    titleStyle={styles.title}
                    transparent
                    style={styles.appBar}
                    leading={props => (
                    <IconButton
                        style={styles.iconButton}
                        icon={props => (
                        <Icon name={revealed ? "close" : "menu"} {...props} size={38}/>
                        )}
                        onPress={() => setRevealed(prevState => !prevState)}
                        {...props}
                    />
                    )}
                />
            </SafeAreaView>
        }
        backLayer={
            <MenuComponent navigation={navigation} />
        }
        >
        <BackdropSubheader title={subheader} />
            <Surface style={styles.content}>
                {content}
            </Surface>
        </Backdrop>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 16,
    },
    header: {
        backgroundColor: "#FF5D8F",
    },
    appBar: {
        height: 80,
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});

export default Header;
  