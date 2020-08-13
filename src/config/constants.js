
import { Dimensions, Platform } from 'react-native';

const constants = {
    LIGHT_BORDER: '#ECE9E9',
    BOX_SHADOW: 1,
    INPUT_TEXT_RADIUS: 5,
    LIGHT_BLUE: '#5558F0',
    BACKGROUND_1: '#F1F2F8',
    RIPPLE_COLOR: '#9B9DF2',
    FONT_SAMSUNG_LIGHT: Platform.OS === 'android' ? 'samsung_s_sharp' : 'System',
    FONT_SAMSUNG_BOLD:
        Platform.OS === 'android' ? 'SamsungSharpSans-Bold' : 'System',
    FONT_HELVET_LIGHT:
        Platform.OS === 'android' ? 'HelveticaNeueLTCom-Md' : 'System',
    FONT_HELVET_BOLD:
        Platform.OS === 'android' ? 'HelveticaLTStd-Bold' : 'System',
    SMALL_FONT: 10,
}
export default constants