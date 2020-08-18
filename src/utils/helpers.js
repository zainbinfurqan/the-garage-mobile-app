
import constants from '../config/constants'

let helper = {};

helper.apiMethod = async function (path = null, method = null, body = null, authorization = null, url = null) {
    try {
        let apiUrl = url;

        if (!apiUrl) {
            apiUrl = constants.BASE_URL + path;
        }
        const headers = {};

        if (authorization) {
            headers.authorization = authorization;
        }

        if (method !== 'GET') {
            headers['Content-Type'] = 'application/json';
        }

        const options = {
            method,
            headers,
        };

        if (body) {
            options['body'] = JSON.stringify(body);
        }
        const response = await fetch(apiUrl, options);
        const json = await response.json();
        if (response.status !== 200) {
            throw new Error(json.message);
        }

        return await json;
    } catch (e) {
        throw e;
    }
};

helper.nameConcatenate = function (name) {
    return name.firstName + ' ' + name.lastName
}

export default helper;