

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

});
