
import { StyleSheet } from 'react-native';
import constants from '../../config/constants'

export default Styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: constants.BACKGROUND_1 },
    line: { margin: 10, borderWidth: 0.34, borderColor: constants.LINE_COLOR, },
    categoryMain: {
        // borderWidth: 0.45,
        borderColor: constants.LIGHT_BLUE,
        height: 25,
        margin: 5,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 20
    },
    clearFilterMain: {
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: constants.LIGHT_BLUE,
        alignSelf: 'flex-end'
    },
    filterMain: {
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: constants.LIGHT_BLUE,
        alignSelf: 'flex-start'
    },
    filterText: {
        color: 'white', fontSize: constants.SMALL_FONT * 1.3,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    filterNumberName: {
        backgroundColor: 'white',
        borderRadius: 50,
        position: 'absolute',
        alignSelf: 'flex-end',
        height: 15,
        width: 15,
        marginTop: -5,
        justifyContent: 'center'
    },
    filterNumber: {
        color: 'black',
        alignSelf: 'center',
        fontSize: constants.SMALL_FONT * 1.3,
        fontFamily: constants.FONT_SAMSUNG_LIGHT
    },
    textInput: {
        height: 40,
        marginBottom: 10,
        borderColor: constants.LIGHT_BORDER,
        borderRadius: 100,
        // borderRadius: constants.INPUT_TEXT_RADIUS * 50
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
    postMain: {
        borderWidth: 0.34,
        borderColor: constants.LIGHT_BORDER,
        padding: 5,
        flexDirection: 'row'
    },
    left: {
        flex: .3,
        justifyContent: 'center'
    },
    postHeaderMain: { flexDirection: 'row', padding: 5 },
    profileMain: { flex: .1 },
    profile: { borderRadius: 30, justifyContent: 'center', height: 30, width: 30 },
    post: {
        alignSelf: 'center',
        height: 100, width: 100
    },
    name: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
    },
    price: { fontFamily: constants.FONT_SAMSUNG_LIGHT, color: constants.LIGHT_BLUE },
    discription: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
        color: constants.GERY
    },
    category: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
        alignSelf: 'flex-end'
    },
    footerMain: { flexDirection: 'row', },
    footer1: { flex: .2, padding: 5, justifyContent: "center", },
    intrestedText1: {
        alignSelf: 'center',
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT
    },
    intrestedText2: {
        alignSelf: 'center', fontFamily: constants.FONT_SAMSUNG_LIGHT, fontSize: constants.SMALL_FONT
    },
    intrestedPeopleNumber: {
        justifyContent: 'center', paddingLeft: 10, flexDirection: 'row',
    },
    intrestedPeopleMain: {
        borderRadius: 50,
        // position: 'relative',
        borderWidth: 1,
        borderColor: 'white',
        height: 25,
        width: 25,
        justifyContent: 'center'
    },
    footer1left: { flexDirection: 'row', marginLeft: 10, padding: 5, flex: .8, alignSelf: 'center' },
});
