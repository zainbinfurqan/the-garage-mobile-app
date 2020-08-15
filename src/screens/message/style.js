
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    messageCardMain: { borderWidth: 0.34, borderColor: constants.LIGHT_BORDER, margin: 5, flexDirection: 'row' },
    nameMain: {
        margin: 5,
        borderWidth: 0.34,
        justifyContent: 'center',
        borderRadius: 20,
        height: 30,
        width: 30,
    },
    nameChar: {
        alignSelf: 'center',
        fontSize: constants.MEDIUM_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    name: {
        alignSelf: 'flex-start',
        marginLeft: 5,
        fontSize: constants.SMALL_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },

});
