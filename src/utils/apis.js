
import helper from './helpers'
import constant from '../config/constants'

let apis = {};



//registration appi
// apis.registration = async function (body = null, authorization = null, headers) {
//     return await helpers.apiMethod(
//         null,
//         'POST',
//         body,
//         authorization,
//         `${constant.BASE_URL}/user/registration`,
//     );
// };

// fetch message api
apis.fetchMessage = function (body = null, authorization = null) {
    return helper.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/chat/message`,
    );
};

//create room api
apis.createRoom = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/chat/room`,
    );
};


//fetch all users
apis.fetchAllUsers = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/user/allusers`,
    );
};


//fetch my post api
apis.fetchMyPost = async function (body = null, authorization = null, headers = null, params) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/post/search?user=${params.userId}`,
    );
};

//fetch my intrest api
apis.fetchMyIntrest = async function (body = null, authorization = null, headers = null, params) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/post/search?intrested=${params.userId}&&userId=${params.userId}`,
    );
};

//seach post api
apis.searchPost = async function (body = null, authorization = null, headers = null, params) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/post/search?category=${params.category}&&priceGraterThen=${params.priceGraterThen}&&priceLessThen=${params.priceLessThen}`,
    );
};

// fetch category api
apis.fetchCategory = async function (body = null, authorization = null, headers = null,) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/category`,
    );
};

// login api
apis.login = async function (body = null, authorization = null, headers) {
    return await helper.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/user/login`,
    );
};

// apis.login = async function (body = null, authorization = null, headers) {
//     if (body.email == 'Zain' && body.password == '1234') {
//         console.log('login')
//         return ({
//             emailVerified: false,
//             phoneVerified: false,
//             role: [],
//             lastPasswordChanged: "2020-08-13T17:44:23.963Z",
//             isBlocked: false,
//             _id: "5f357bfe448ed42304fa7e1f",
//             firstName: "zain",
//             lastName: "ahmed",
//             email: "zain.ahmed199525@gmail.com",
//             phoneNo: "03022408099",
//             address: "usmania colony nazimabad no 1",
//             createdAt: "2020-08-13T17:44:30.193Z",
//             updatedAt: "2020-08-13T17:44:30.193Z",
//             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM1N2JmZTQ0OGVkNDIzMDRmYTdlMWYiLCJleHBpcmVUaW1lIjoiMjAyMC0wOC0xOFQwNzo0Mzo0NS4yMTdaIiwiaWF0IjoxNTk3NzAwNjI1LCJleHAiOjE1OTc3MzY2MjV9.IK-isMByCUjprS8wAwrS_0IBQLxTEKiefZRVh51cT9g",
//         })
//     }
// };

// apis.registration = async function (body = null, authorization = null, headers) {
//     console.log('registration')
//     return ({
//         name: 'zain ahmed',
//         token: 'ncjfjassdf23rfwefs32',
//         phone: '03022408099',
//         email: 'zain.ahmed@gmail.com',
//         address: 'usmania socity nazimabad',
//         emailVerified: false,
//     })
// };



export default apis;