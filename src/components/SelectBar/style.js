
import { StyleSheet, Dimensions } from 'react-native';
import constant from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    selectmain: { flexDirection: 'row', margin: 5, padding: 5, justifyContent: 'space-evenly' },
    optionLeftMain: {
        borderWidth: 0.34,
        borderColor: constant.LINE_COLOR,
        borderRadius: 50,
        flex: 0.3, justifyContent: 'center'
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
