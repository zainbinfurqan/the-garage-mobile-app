
import { StyleSheet } from 'react-native';
import constants from '../../config/constants'

export default Styles = StyleSheet.create({
    messageMain1: {
        borderWidth: 0.34,
        borderRadius: 5,
        borderColor: constants.LIGHT_BORDER,
        width: 150,
        padding: 5,
        margin: 10,
        alignSelf: 'flex-start'
    },
    messageMain2: {
        borderWidth: 0.34,
        borderRadius: 5,
        borderColor: constants.LIGHT_BORDER,
        padding: 5,
        width: 150,
        margin: 10,
        alignSelf: 'flex-end'
    },
    textMessage: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT
    },
    dateText: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 0.7,
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 45,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: constants.INPUT_TEXT_RADIUS
    },
});
