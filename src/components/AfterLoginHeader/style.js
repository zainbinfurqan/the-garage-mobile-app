
import { StyleSheet } from 'react-native';
import constants from '../../config/constants'

export default Styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: constants.BACKGROUND_1 },
    optionFalg: { flex: .1, alignSelf: 'center', padding: 5, },
    optionMain: {
        zIndex: 1,
        backgroundColor: 'white',
        padding: 10,
        // paddingRight: -40,
        height: 50,
        flex: 1,
        alignSelf: 'flex-end',
        width: 50,
        borderWidth: 1,
        position: 'absolute',
        // marginTop: 50,
        margin: 10,
    },
    optionText: {
        fontSize: constants.SMALL_FONT * 1.2,
        alignSelf: 'center',
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
});
