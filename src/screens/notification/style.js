
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    containerMain: { flex: 1, backgroundColor: 'white' },
    line: { margin: 10, borderWidth: 0.34, borderColor: constants.LINE_COLOR, },

});
