
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    containerMain: { flex: 1, backgroundColor: 'white' },
    line: { margin: 10, borderWidth: 0.34, borderColor: constants.LINE_COLOR, },
    text: {
        fontFamily: constants.FONT_SAMSUNG_LIGHT,
        fontSize: constants.SMALL_FONT * 1.2
    },
    profileMain: { justifyContent: "center", padding: 10, },
    profilePic: { height: 120, width: 122, alignSelf: 'center', },
});
