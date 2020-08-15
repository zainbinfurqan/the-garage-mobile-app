
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    line: { margin: 10, borderBottomWidth: 0.34, borderColor: constants.LINE_COLOR, },
    categoryMain: {
        backgroundColor: constants.LIGHT_BLUE,
        height: 25,
        justifyContent: 'center',
        borderRadius: 20,

    },
    categoryText: {
        color: 'white',
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        alignSelf: 'center'
    },
});
