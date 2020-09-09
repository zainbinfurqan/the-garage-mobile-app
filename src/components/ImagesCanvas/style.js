
import { StyleSheet, Dimensions } from 'react-native';
import constants from '../../config/constants'
const { width, height } = Dimensions.get('window')

export default Styles = StyleSheet.create({

    productImagesMain: {
        // borderStyle: 'dashed',
        // borderRadius: 3,
        // borderColor: constants.RED,
        padding: 5,
        width: '90%',
        height: 320,

    },
    image: {
        borderWidth: 1,
        position: 'absolute',
        height: 250,
        width: '50%',
        borderRadius: 5,
        alignSelf: 'center',

    },

});
