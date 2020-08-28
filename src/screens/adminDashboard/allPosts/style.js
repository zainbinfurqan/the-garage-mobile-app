

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
    pendingMainCard: { borderWidth: 0.34, margin: 5, borderRadius: 3, padding: 5, flexDirection: 'column' },
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
