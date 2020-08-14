
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
    postListMain: { flex: 1, marginTop: 10 },
    categoryScroll: { flexDirection: 'row', flexWrap: 'wrap', },
    priceRangMain: { height: 60, padding: 10 },
    priceLow: { flex: 0.5, marginRight: 5 },
    priceHigh: { flex: 0.5, },
});
