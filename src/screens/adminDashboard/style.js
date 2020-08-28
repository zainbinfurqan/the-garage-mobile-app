
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    main: {
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 10,
        width: '49%',
        height: 140,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    blockMain: {
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 0.34,
        width: "60%",
        borderColor: constants.LIGHT_BORDER,
    },
    itemText: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.2,
        alignSelf: 'center'
    },
});
