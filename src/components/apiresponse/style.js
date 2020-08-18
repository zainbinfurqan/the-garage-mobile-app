

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
    main: {
        margin: 20,
        padding: 10,
        borderRadius: 5,
        minHeight: 100,
    },
    iconMain: { justifyContent: 'center', padding: 10 },
    icon: { height: 50, width: 50, alignSelf: 'center' },
    errorIcon: { height: 70, width: 70, alignSelf: 'center', marginTop: 10 },
    text: {
        alignSelf: 'center',
        fontSize: constants.LARGE_FONT,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    responseText: {
        alignSelf: 'center',
        color: constants.GREEN,
        fontSize: constants.SMALL_FONT * 1.2,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
});
