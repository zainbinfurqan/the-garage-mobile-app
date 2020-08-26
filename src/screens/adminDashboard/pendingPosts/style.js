
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    mainCard: { borderWidth: 0.34, margin: 5, borderRadius: 3, padding: 5, flexDirection: 'column' },
    nameMain: { padding: 5 },
    name: {
        fontSize: constants.SMALL_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    postMain: { padding: 5 },
    post: {
        fontSize: constants.SMALL_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    option: { padding: 5, flexDirection: 'row', justifyContent: 'center' },
    viewMain: { flex: .33, justifyContent: 'center' },
    viewName: {
        alignSelf: 'center',
        fontSize: constants.SMALL_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    editMain: { flex: .33, justifyContent: 'center' },
    editName: {
        alignSelf: 'center',
        fontSize: constants.SMALL_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    approveMain: { flex: .33, justifyContent: 'center' },
    approveName: {
        alignSelf: 'center',
        fontSize: constants.SMALL_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
});
