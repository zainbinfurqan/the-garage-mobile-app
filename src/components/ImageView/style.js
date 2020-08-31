


import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(0,0,0,0.6)',
        // justifyContent: "center"
    },
    backMain: { justifyContent: "center", padding: 10 },
    backIcon: { height: 25, width: 25 },
    imageContainer: {
        flex: 1, justifyContent: "center",
    },
    imageMain: {
        elevation: 2,
        width: '90%',
        borderRadius: 5,
        shadowColor: "#000",
        alignSelf: 'center',
    },
    image: {
        borderRadius: 5, height: 300, width: '100%'
    },
});
