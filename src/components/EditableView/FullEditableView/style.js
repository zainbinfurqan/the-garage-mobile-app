

import { StyleSheet } from 'react-native';
import constants from '../../../config/constants'

export default Styles = StyleSheet.create({
    textInputArea: {
        marginBottom: 10,
        borderWidth: 0.34,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: constants.INPUT_TEXT_RADIUS
    },
    textInput: {
        height: 40,
        marginBottom: 10,
        borderWidth: 0.34,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: constants.INPUT_TEXT_RADIUS
    },
});
