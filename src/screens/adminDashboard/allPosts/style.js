

import { StyleSheet } from 'react-native';
import constants from '../../../config/constants'

export default Styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: 'white' },
    scrollMain: { paddingLeft: 10, paddingTop: 10, paddingRight: 10, flex: 1, borderColor: 'red', },
    mainCard: {
        borderWidth: 0.34, borderColor: constants.LIGHT_BORDER,
        borderRadius: 2, marginBottom: 5, flexDirection: 'row'
    },
    left: { flex: .7, padding: 5 },
    leftText1: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.3
    },
    line: { borderWidth: 0.34, borderColor: constants.LINE_COLOR, },
    leftText2: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
        color: constants.GERY
    },
    right: {
        flex: .3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    openIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        // transform: [{ rotate: '180deg' }]
    },
    textInput: {
        height: 40,
        marginBottom: 10,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: 100,
        // borderRadius: constants.INPUT_TEXT_RADIUS * 50
    },
});
