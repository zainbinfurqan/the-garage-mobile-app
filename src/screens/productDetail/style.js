
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
        marginBottom: 5,
        backgroundColor: constants.LIGHT_BLUE,
        height: 25,
        justifyContent: 'center',
        borderRadius: 20,

    },
    titleText: {
        color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.5
    },
    nameText: {
        color: 'black', fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.2
    },
    descriptionText: {
        color: constants.GERY, fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.2
    },
    productImagesMain: {
        borderStyle: 'dashed',
        borderRadius: 3,
        borderColor: constants.RED,
        padding: 5,
        height: 320, margin: 10, borderWidth: 1

    },
    productImage1: {
        borderRadius: 5,
        height: 150, width: 200, alignSelf: 'center',
    },
    productImage2: {
        borderRadius: 5,
        height: 140, width: '100%', alignSelf: 'center',
    },
    productImage3: {
        borderRadius: 5,
        height: 140, width: '100%', alignSelf: 'center',
    },
    productImageMain1: {
        alignSelf: 'center',
        elevation: 2,
        borderRadius: 5,
        shadowColor: "#000",
    },
    productImageMain2: {
        flex: .45, alignSelf: 'center',
        elevation: 2,
        borderRadius: 5,
        shadowColor: "#000",
    },
    productImageMain3: {
        alignSelf: 'center',
        elevation: 2,
        borderRadius: 5,
        shadowColor: "#000",
    },
    categoryText: {
        color: 'white',
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        alignSelf: 'center'
    },
    textMe: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        alignSelf: 'center',
        fontSize: constants.SMALL_FONT
    },
    intrested: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        alignSelf: 'center',
        fontSize: constants.SMALL_FONT
    },
});
