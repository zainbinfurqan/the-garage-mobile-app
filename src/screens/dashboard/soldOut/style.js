
import { StyleSheet } from 'react-native';
import constants from '../../../config/constants'

export default Styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: 'white' },
    scrollMain: { paddingLeft: 10, paddingRight: 10, flex: 1, borderColor: 'red', },
    mainCard: {
        borderWidth: 0.34, borderColor: constants.LIGHT_BORDER,
        borderRadius: 2, marginBottom: 5, flexDirection: 'row'
    },
    left: { flex: .9, paddingLeft: 5 },
    leftText1: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT
    },
    leftText2: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.2
    },
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
