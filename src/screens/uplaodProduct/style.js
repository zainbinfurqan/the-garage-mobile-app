


import { StyleSheet } from 'react-native';
import constants from '../../config/constants'

export default Styles = StyleSheet.create({
    // uploadMain: {
    //     borderStyle: 'dashed',
    //     justifyContent: 'center',
    //     borderRadius: 2,
    //     borderWidth: 1,
    //     height: 140,
    //     margin: 10
    // },
    imageMain: {
        borderRadius: 5
        , height: 90, flex: 0.2,
        marginLeft: 2,
    },
    image: { borderRadius: 4, width: '100%', height: '100%' },
    removeImageMain: {
        borderWidth: 0.34,
        backgroundColor: 'black',
        height: 15,
        alignSelf: 'flex-end',
        borderRadius: 10,
        justifyContent: 'center',
        marginRight: -10,
        width: 15,
    },
    errorText2: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
        color: constants.RED
    },
    errorText1: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
    },
    selectAutoPartsCateogy: {
        borderWidth: 0.34,
        height: 50,
        marginBottom: 5,
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: constants.LIGHT_BORDER
    },
    removeImagebuttonText: {
        fontSize: constants.SMALLEST_FONT,
        alignSelf: 'center',
        color: 'white',
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    uploadMain: {
        borderWidth: 0.34,
        height: 160,
        marginBottom: 10,
        padding: 5,
        top: 0,
        borderRadius: 5,
    },
    addMore: {
        width: '90%',
        height: 35,
        alignSelf: 'center',
        bottom: 10,
        position: 'absolute',
    },
    uploadText: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
        alignSelf: 'center',
        color: constants.LINE_COLOR
    },
    uploadIcon: {
        alignSelf: 'center',
        height: 50, width: 50
    },
    textInputArea: {
        marginBottom: 10,
        borderWidth: 0.34,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: constants.INPUT_TEXT_RADIUS
    },
    textInput: {
        height: 40,
        marginBottom: 10,
        borderWidth: 0.34,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: constants.INPUT_TEXT_RADIUS
    },
});
