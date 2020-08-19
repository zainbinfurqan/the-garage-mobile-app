
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: constants.BACKGROUND_1 },
    form: {
        flexGrow: 2, padding: 10, justifyContent: 'center', marginTop: -50,

    },
    logoMain: { justifyContent: 'center', margin: 10 },
    logo: { height: 100, width: 100, alignSelf: 'center' },
    headingText: {
        marginBottom: 10,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    textInput: {
        height: 40,
        marginBottom: 10,
        borderWidth: 0.34,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: constants.INPUT_TEXT_RADIUS
    },
    footerText1: {
        marginBottom: 10,
        fontWeight: '100',
        fontSize: constants.SMALL_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    footerText2: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: constants.SMALL_FONT,
        color: constants.LIGHT_BLUE
    }
});
