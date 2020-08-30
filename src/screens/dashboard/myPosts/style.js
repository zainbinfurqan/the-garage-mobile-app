
import { StyleSheet } from 'react-native';
import constants from '../../../config/constants'

export default Styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: 'white' },
    scrollMain: { paddingLeft: 10, paddingRight: 10, flex: 1, borderColor: 'red', },
    mainCard: {
        borderWidth: 0.34, borderColor: constants.LIGHT_BORDER,
        borderRadius: 2, marginBottom: 5, flexDirection: 'column'
    },
    left: { flex: .9, padding: 5 },
    leftText1: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.3
    },
    leftText2: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
        color: constants.GERY
    },
    line: { borderWidth: 0.34, borderColor: constants.LINE_COLOR, },
    right: {
        flex: .1,
        justifyContent: 'center'
    },
    openIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        transform: [{ rotate: '180deg' }]
    },
});
