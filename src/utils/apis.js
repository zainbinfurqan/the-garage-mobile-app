
import helper from './helpers'
import constant from '../config/constants'

let apis = {};

//login api
// apis.login = async function (body = null, authorization = null, headers) {
//     return await helpers.apiMethod(
//         null,
//         'POST',
//         body,
//         authorization,
//         `${constant.BASE_URL}/user/login`,
//     );
// };

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

//fetch my post api
apis.fetchMyPost = async function (body = null, authorization = null, headers, params) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/post/search?user${params.userId}`,
    );
};

//fetch my intrest api
apis.fetchMyIntrest = async function (body = null, authorization = null, headers, params) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/post/search?intrested${params.userId}`,
    );
};

//seach post api
apis.searchPost = async function (body = null, authorization = null, headers, params) {
    console.log(params)
    let url = '/post/search?';
    if (params.category) {
        url + `category${params.category}`
    }
    if (params.priceGraterThen) {
        url + `priceGraterThen${params.priceGraterThen}`
    }
    if (params.priceLessThen) {
        url + `priceLessThen${params.priceLessThen}`
    }
    console.log(url)
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}` + `${url}`,
    );
};

apis.login = async function (body = null, authorization = null, headers) {
    if (body.email == 'Zain' && body.password == '1234') {
        console.log('login')
        return ({
            name: 'zain ahmed',
            token: 'ncjfjassdf23rfwefs32',
            phone: '03022408099',
            email: 'zain.ahmed@gmail.com',
            address: 'usmania socity nazimabad',
            emailVerified: false,
        })
    }
};

apis.registration = async function (body = null, authorization = null, headers) {
    console.log('registration')
    return ({
        name: 'zain ahmed',
        token: 'ncjfjassdf23rfwefs32',
        phone: '03022408099',
        email: 'zain.ahmed@gmail.com',
        address: 'usmania socity nazimabad',
        emailVerified: false,
    })
};



export default apis;