

import { StyleSheet } from 'react-native';
import constants from '../../config/constants';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: "center"
    },
    modelMain: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)', padding: 10, },
    line: { margin: 10, borderWidth: 0.34, borderColor: constants.LINE_COLOR, },
    headermain: {
        backgroundColor: constants.LIGHT_BLUE,
        justifyContent: 'center',
        padding: 5,
        paddingBottom: 15,
        borderTopEndRadius: 9,
        borderTopStartRadius: 9,
    },
    closeMain: {
        height: 20,
        width: 20,
        alignSelf: 'flex-end',
        borderRadius: 50,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    closeText: { alignSelf: 'center' },
    headerText: {
        color: 'white',
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        alignSelf: 'center'
    },
    main: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    selectMain: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottomWidth: 0.35,
        borderColor: constants.LIGHT_BORDER,
        margin: 5,
        paddingBottom: 20, paddingTop: 20,
    },
    selectText: {
        color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT,
        alignSelf: 'center'
    },
});
