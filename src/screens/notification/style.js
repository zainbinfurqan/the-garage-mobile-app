
import { StyleSheet, Dimensions } from 'react-native';
import constant from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    containerMain: { flex: 1, backgroundColor: 'white' },
    line: { margin: 10, borderWidth: 0.34, borderColor: constant.LINE_COLOR, },
    selectmain: { flexDirection: 'row', margin: 5, padding: 5, justifyContent: 'space-evenly' },
    optionLeftMain: {
        borderWidth: 0.34,
        borderColor: constant.LINE_COLOR,
        borderRadius: 50,
        flex: 0.3, justifyContent: 'center'
    },
    optionFalg: { zIndex: 1, alignSelf: 'flex-start', padding: 5, },
    optionMain: {
        borderWidth: 1,
        backgroundColor: 'white',
        height: 50,
        width: 100,
        position: 'absolute',
        // marginLeft: 37,
        marginTop: 20,
    },
    optionText: {
        borderWidth: 0.34,
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: constant.SMALL_FONT * 1.2,
        alignSelf: 'center',
        fontFamily: constant.FONT_SAMSUNG_LIGHT
    },
    optionLeftText: {
        padding: 3,
        color: 'black',
        fontFamily: constant.FONT_SAMSUNG_LIGHT,
        fontSize: constant.SMALL_FONT * 1.4,
        alignSelf: 'center',
    },
    optionRightMain: {
        borderColor: constant.LINE_COLOR,
        borderWidth: 0.34,
        borderRadius: 50,
        flex: 0.3, justifyContent: 'center'
    },
    optionRightText: {
        padding: 3,
        color: 'black',
        fontFamily: constant.FONT_SAMSUNG_LIGHT,
        fontSize: constant.SMALL_FONT * 1.4,
        alignSelf: 'center',
    },
});
