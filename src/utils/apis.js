
import helper from './helpers'
import constant from '../config/constants'
import RNFetchBlob from 'rn-fetch-blob';
import constants from '../config/constants';

let apis = {};



//registration appi
apis.registration = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/user/registration`,
    );
};

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

apis.fetchPostDetail = function (body = null, authorization = null, header = null, params = null) {
    return helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/post/detail?postId=${params.postId}`,
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
        `${constant.BASE_URL}/post/search?category=${params.category}&&priceGraterThen=${params.priceGraterThen}&&priceLessThen=${params.priceLessThen}&&firstName=${params.name}`,
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

//faq fetch api
apis.fetchFaq = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/faq`,
    );
};

//fetch all posts api
apis.fetchAllPosts = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/post/fetchall`,
    );
};

//fetch all notiftication api
apis.fetchAllNotification = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/notification?user=${params.user}`,
    );
};

// fetch unread local notification 
apis.fetchUnReadLocalNotification_ = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/notification/unred?user=${params.user}`,
    );
};

// markt  local notification read 
apis.markNotificationRead = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/notification/`,
    );
};

// markt  local notification delete 
apis.markNotificationDelete = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/notification/delete`,
    );
};

//add to intrested api
apis.markIntrested = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/intrested/makeintrested`,
    );
};

//add to un intrested api
apis.markUnIntrested = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/intrested/unintrested`,
    );
};


//create post api 
apis.createPost = async function (body = null, authorization = null, headers = null) {
    return await helper.apiMethod(
        null,
        'POST',
        body,
        authorization,
        `${constant.BASE_URL}/post/create`,
    );
};


// create post api
// apis.createPost = async function (body = null, authorization = null, headers) {
//     console.log("body=>", body)
//     return await RNFetchBlob.fetch(
//         'POST',
//         `${constant.BASE_URL}/post/create`,
//         {
//             'Content-Type': 'multipart/form-data',
//         },
//         [
//             //--------1 line------//
//             {
//                 name: 'file1',
//                 filename: body.images[0].filename,
//                 type: body.images[0].type,
//                 data: RNFetchBlob.wrap(body.images[0].path),
//             },
//             {
//                 name: 'file2',
//                 filename: body.images[1].filename,
//                 type: body.images[1].type,
//                 data: RNFetchBlob.wrap(body.images[1].path),
//             },
//             {
//                 name: 'file3',
//                 filename: body.images[2].filename,
//                 type: body.images[2].type,
//                 data: RNFetchBlob.wrap(body.images[2].path),
//             },

//             {
//                 name: 'info',
//                 data: JSON.stringify({ ...body.data }),
//             },
//             //--------2 line------//
//         ],
//     );
// };




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

//admin apis
// search users api 
apis.searchUsersAdmin = async function (body = null, authorization = null, headers = null, params = null) {
    let url = params.firstName === '' ? '/admin/searchuser' : `/admin/searchuser?firstName=${params.firstName}`
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}${url}`,
    );
};

// update user product  api 
apis.updateuserProductByAdmin = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/admin/updateuserpost`,
    );
};

// delete user product  api 
apis.deleteUserPost = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/admin/deleteuserpost`,
    );
};

// fetch pending post
apis.fetchPendingPost = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'GET',
        body,
        authorization,
        `${constant.BASE_URL}/admin/pendingposts`,
    );
};

// block user api
apis.blockUser = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/admin/blockuser`,
    );
};

// unblock user api
apis.unBlockUser = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/admin/unblockuser`,
    );
};

// approve post api
apis.approvedPost = async function (body = null, authorization = null, headers = null, params = null) {
    return await helper.apiMethod(
        null,
        'PUT',
        body,
        authorization,
        `${constant.BASE_URL}/admin/approvepost`,
    );
};

export default apis;