
import { StyleSheet } from 'react-native';
import constants from '../../../config/constants'

export default Styles = StyleSheet.create({
    container: { backgroundColor: 'white', flex: 1, padding: 5 },
    backMain: { paddingBottom: 10, paddingTop: 10 },
    images: { flexDirection: 'row', },
    image1: { borderStyle: 'dashed', margin: 4, padding: 2, borderWidth: 1, borderRadius: 2, height: 150, flex: .33 },
    nameMain: { margin: 4, },
    name: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.3
    },
    discription: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.3,
        color: constants.GERY
    },
    phone: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.3
    },
    instruction: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.3,
        alignSelf: 'center'
    },
    cateogory: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.3
    },
});
