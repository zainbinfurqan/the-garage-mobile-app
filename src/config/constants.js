
import { Dimensions, Platform } from 'react-native';

const constants = {
    LIGHT_BORDER: '#ECE9E9',
    BOX_SHADOW: 1,
    INPUT_TEXT_RADIUS: 5,
    LIGHT_BLUE: '#2F66A7',
    BACKGROUND_1: '#F1F2F8',
    RIPPLE_COLOR: '#9B9DF2',
    LINE_COLOR: '#CFD0D3',
    FONT_SAMSUNG_LIGHT: Platform.OS === 'android' ? 'samsung_s_sharp' : 'System',
    FONT_SAMSUNG_BOLD:
        Platform.OS === 'android' ? 'SamsungSharpSans-Bold' : 'System',
    FONT_HELVET_LIGHT:
        Platform.OS === 'android' ? 'HelveticaNeueLTCom-Md' : 'System',
    FONT_HELVET_BOLD:
        Platform.OS === 'android' ? 'HelveticaLTStd-Bold' : 'System',
    SMALL_FONT: 10,
    SMALLEST_FONT: 10,
    MEDIUM_FONT: 12,
    CATEGORIES: [
        { title: 'Pillar' },
        { title: 'Bumper' },
        { title: 'Decklid' },
        { title: 'Anti-intrusion bar' },
        { title: 'Roof rack' },
        { title: 'Fender' },
        { title: 'Sunroof Glass' },
        { title: 'Speaker' },
        { title: 'Dashcam' },
        { title: 'Ammeter' },
        { title: 'Ignition box' },
        { title: 'Ignition coil' },
    ],
    POST_DUMMAY: [
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
    ],
    INTRESTES_LIST: [
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },
        { title: 'category' },

    ]
}
export default constants