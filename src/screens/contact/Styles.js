import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // lista
    list: {
        height: 310,
    },
    // item contato
    contactCon: {
        flex: 1,
        width: 240,
        flexDirection: 'row',
        padding: 6,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d9d9d9',
    },
    imgCon: {},
    placeholder: {
        width: 40,
        height: 40,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contactDat: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    txt: {
        fontSize: 18,
    },
    name: {
        fontSize: 16,
    },
    phoneNumber: {
        color: '#888',
    },
    // button open modal
    button: {
        borderRadius: 30,
        padding: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        backgroundColor: '#FF5D8F',
    },
    buttonOpen: {
        backgroundColor: '#FF5D8F',
    },
    textStyle: {
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // input modal
    inputView: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 40,
        width: 230,
        margin: 12,
        borderWidth: 1,
        borderColor: "#FF5D8F",
        borderRadius: 50,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
    },

    // modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 300,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonClose: {
        marginTop: 20,
        width: 100,
        backgroundColor: '#FF5D8F',
    },
});

export default styles;