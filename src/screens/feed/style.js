
import { StyleSheet } from 'react-native';
import constants from '../../config/constants'

export default Styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: constants.BACKGROUND_1 },
    line: { margin: 10, borderWidth: 0.34, borderColor: constants.LINE_COLOR, },
    categoryMain: {
        borderWidth: 1,
        borderColor: constants.LIGHT_BLUE,
        height: 25,
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 20
    },
    categoryText: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.1,
        color: constants.LIGHT_BLUE,
    },
    priceRangText: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT
    },
    postListMain: { flex: 1, },
    categoryScroll: { flexDirection: 'row', flexWrap: 'wrap', },
    priceRangMain: { height: 45, paddingLeft: 10, paddingRight: 10, },
    priceLow: { flex: 0.5, marginRight: 5 },
    priceHigh: { flex: 0.5, },
    postMain: { flex: 1, flexDirection: 'column', margin: 2, borderWidth: 1, },
    postHeaderMain: { flexDirection: 'row', padding: 5 },
    profileMain: { flex: .1 },
    profile: { borderWidth: 0.34, borderRadius: 30, justifyContent: 'center', height: 30, width: 30 },

    name: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        padding: 5
    },
    footerMain: { flexDirection: 'row', },
    footer1: { flex: .3, padding: 5 },
    intrestedText1: {
        alignSelf: 'center',
        fontFamily: constants.FONT_SAMSUNG_LIGHT, fontSize: constants.SMALL_FONT
    },
    intrestedText2: {
        alignSelf: 'center', fontFamily: constants.FONT_SAMSUNG_LIGHT, fontSize: constants.SMALL_FONT
    },
});
