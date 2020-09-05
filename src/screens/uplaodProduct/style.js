


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
    uploadMain: {
        borderWidth: 0.34,
        height: 150,
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
