
import { StyleSheet } from 'react-native';
import constants from '../../config/constants'

export default Styles = StyleSheet.create({
    dashboardMain: { flex: 1, backgroundColor: 'white' },
    switchTabsMain: {
        borderBottomWidth: 0.34, marginLeft: 5,
        marginBottom: 5,
        borderColor: constants.LIGHT_BORDER,
        marginRight: 5,
        height: 35, flexDirection: 'row', justifyContent: 'center'
    },
    switchTab: {
        borderWidth: 0.34,
        borderColor: constants.LIGHT_BORDER,
        flex: .3,
        margin: 5,
        borderRadius: 20,
        justifyContent: 'center'
    },
    switchTabText: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT,
        alignSelf: 'center',
        color: constants.LIGHT_BLUE
    },
    line: { margin: 10, borderWidth: 0.34, borderColor: constants.LINE_COLOR, },

});
