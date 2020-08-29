
import { Dimensions, Platform } from 'react-native';

const constants = {
    SOCKET_IO_URL: 'https://serene-savannah-02158.herokuapp.com/socketio',
    // BASE_URL: 'https://9392c8208c5b.ngrok.io/api',
    // BASE_URL: 'https://192.168.0.115:3000',
    BASE_URL: 'https://serene-savannah-02158.herokuapp.com/api',
    LIGHT_BORDER: '#B5B6BA',
    GREEN: '#17B75B',
    RED: '#d42431',
    BOX_SHADOW: 1,
    INPUT_TEXT_RADIUS: 5,
    THEME_COLOE: '#d42431',
    LIGHT_BACKGROUND_COLOR: "#F7F7F8",
    LIGHT_BLUE: '#d42431',
    BACKGROUND_1: '#F1F2F8',
    RIPPLE_COLOR: '#9B9DF2',
    LINE_COLOR: '#CFD0D3',
    GERY: '#B0AAAA',
    FONT_SAMSUNG_LIGHT: Platform.OS === 'android' ? 'samsung_s_sharp' : 'System',
    FONT_SAMSUNG_BOLD:
        Platform.OS === 'android' ? 'SamsungSharpSans-Bold' : 'System',
    FONT_HELVET_LIGHT:
        Platform.OS === 'android' ? 'HelveticaNeueLTCom-Md' : 'System',
    FONT_HELVET_BOLD:
        Platform.OS === 'android' ? 'HelveticaLTStd-Bold' : 'System',
    SMALL_FONT: 10,
    SMALLEST_FONT: 10,
    MEDIUM_FONT: 20,
    LARGE_FONT: 25,


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
    ],
    USER_LIST: [
        { title: 'Zain' },
        { title: 'Faraz' },
        { title: 'arsalan' },
        { title: 'ammad' },
        { title: 'tanveer' },
        { title: 'omer' },
        { title: 'arshaq' },
        { title: 'owais' },
    ],
    CHAT_MESSAGES: [
        { id: 1, message: 'start' },
        { id: 2, message: 'hye aasd asd asd asd asd asdas dll' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye allasda sda sdas dasd asd asd' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye as dasd asasd as' },
        { id: 1, message: 'hye aasd ll' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye alasd asd l' },
        { id: 2, message: 'hye alla sda sd' },
        { id: 1, message: 'hye aasd asdll' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye aasd asd ll' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye asd asall' },
        { id: 2, message: 'hye aasd asd ll' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye alasd asdl' },
        { id: 1, message: 'hye all' },
        { id: 2, message: 'hye all' },
        { id: 1, message: 'hye aasd asll' },
        { id: 2, message: 'End' },
    ],
    MY_POSTS: [
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
        // { title: 'My Post' },
    ],

    USER_DATA: [
        {
            id: '5f3a822c51e06e2f74c73488',
            firstName: 'zain', lastName: 'ahmed', email: 'z@g.com', address: 'usmania socity', phone: '03022408099'
        },
        {
            id: '5f3a8264bdc007524f437856',
            firstName: 'faraz', lastName: 'ahmed', email: 'f@g.com', address: 'usmania socity', phone: '03022408098'
        },
        {
            id: '5f3a826d2043b649600e4aa7',
            firstName: 'arsalan', lastName: 'ahmed', email: 'a@g.com', address: 'usmania socity', phone: '03022408079'
        },
        {
            id: '5f3a82712dba903a2afa1054',
            firstName: 'omer', lastName: 'khan', email: 'o@g.com', address: 'usmania socity', phone: '03022408069'
        },
        {
            id: '5f3a8276d3ba491e9887eaf0',
            firstName: 'tanveer', lastName: 'ul haq', email: 't@g.com', address: 'usmania socity', phone: '03022408059'
        },
        {
            id: '5f3a827a8456e2da66630fe6',
            firstName: 'arshaq', lastName: 'shakeel', email: 'ar@g.com', address: 'usmania socity', phone: '03022408049'
        },
        {
            id: '5f3a827ebc618668a1a69f32',
            firstName: 'ammad', lastName: 'imran', email: 'am@g.com', address: 'usmania socity', phone: '03022408039'
        },
        {
            id: '5f3a82837e4ba7d8057846ca',
            firstName: 'owais', lastName: 'khan', email: 'o@g.com', address: 'usmania socity', phone: '03022408029'
        },
    ],
    CATEGORIES: [
        { id: '5f3a838ff315fbe1266f44c7', title: 'Pillar', flag: false },
        { id: '5f3a8393a5ecf162b694a610', title: 'Bumper', flag: false },
        { id: '5f3a8397c8f3577b88f7cccf', title: 'Anti-intrusion bar', flag: false },
        { id: '5f3a83a3573a667c622bb398', title: 'Roof rack', flag: false },
        { id: '5f3a83a857af5069d09e92c5', title: 'Fender', flag: false },
        { id: '5f3a83ab33f0b000d85ead9d', title: 'Sunroof Glass', flag: false },
        { id: '5f3a83b0e58ac2abd00f116c', title: 'Speaker', flag: false },
        { id: '5f3a83b4df99f1359472d9f7', title: 'Dashcam', flag: false },
        { id: '5f3a83b702ed17234ff67b59', title: 'Ammeter', flag: false },
        { id: '5f3a83bd250b7905c212cb59', title: 'Ignition box', flag: false },
        { id: '5f3a83c2d87055dc2ac9f79a', title: 'Ignition coil', flag: false },
    ],
    POST_DUMMAY: [
        {
            id: '5f3a8187a97330b8e2c68617',
            category: '5f3a838ff315fbe1266f44c7',
            user: '5f3a822c51e06e2f74c73488',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a8197095971eeaec6019e',
            category: '5f3a8393a5ecf162b694a610',
            user: '5f3a8264bdc007524f437856',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81a3b71ff8376c5a8288',
            category: '5f3a8397c8f3577b88f7cccf',
            user: '5f3a826d2043b649600e4aa7',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81b1dd6d24933c0f209e',
            category: '5f3a83a3573a667c622bb398',
            user: '5f3a82712dba903a2afa1054',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81b7223c41567d73a2b3',
            category: '5f3a83a857af5069d09e92c5',
            user: '5f3a8276d3ba491e9887eaf0',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81c07c00b3ceb831524d',
            category: '5f3a83ab33f0b000d85ead9d',
            user: '5f3a827a8456e2da66630fe6',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81c72c879fc7519b8540',
            category: '5f3a83b0e58ac2abd00f116c',
            user: '5f3a827ebc618668a1a69f32',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81ce3e99044ff1c2997d',
            category: '5f3a83b4df99f1359472d9f7',
            user: '5f3a82837e4ba7d8057846ca',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81d527815ee5b1378790',
            category: '5f3a83bd250b7905c212cb59',
            user: '5f3a82837e4ba7d8057846ca',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81dc7d7b803e7afa6797',
            category: '5f3a83c2d87055dc2ac9f79a',
            user: '5f3a827ebc618668a1a69f32',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81e18957674784e79cd4',
            category: '5f3a838ff315fbe1266f44c7',
            user: '5f3a827a8456e2da66630fe6',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81eb930e6331647cce7a',
            category: '5f3a8393a5ecf162b694a610',
            user: '5f3a827a8456e2da66630fe6',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81f482999a335df50ac1',
            category: '5f3a83b0e58ac2abd00f116c',
            user: '5f3a8276d3ba491e9887eaf0',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
        {
            id: '5f3a81fd504748c9409e3819',
            category: '5f3a83b0e58ac2abd00f116c',
            user: '5f3a82712dba903a2afa1054',
            isApproved: true,
            intrested: [],
            isDeleted: false,
            isSoldOut: false,
            priceRange: 1000,
            discription: 'no thing  serious just got chill pills so im with all the ladies and gents',
            contactNo: '03022408099',
        },
    ],
    NOTIFICATION: [
        {
            title: 'sold out',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        },
        {
            title: 'intrested',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        },
        {
            title: 'sold out',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: true,
        },
        {
            title: 'sintrested',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        },
        {
            title: 'sold out',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        },
        {
            title: 'intrested',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        },
        {
            title: 'intrested',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        },
        {
            title: 'intrested',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        },
        {
            title: 'intrested',
            discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
            isRead: false,
        }
    ]
}
export default constants