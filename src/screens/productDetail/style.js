
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'relative',
        top: 0,
        left: 0,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: height,
        width: width,
    },
    line: { margin: 10, borderWidth: 0.34, borderColor: constants.LINE_COLOR, },

});
