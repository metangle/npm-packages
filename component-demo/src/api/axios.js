import axios from 'axios'

import { baseURL } from '@/config'

const config = {
    baseURL, // set http baseurl
    timeout: 5 * 1000, // set request timeout
    crossDomain: true // allow cross domain
}
// create request instance
const _axios = axios.create(config)
/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
    return _axios({
        method: 'post',
        url,
        data,
        params,
    })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
    return _axios({
        method: 'get',
        url,
        params,
    })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
    return _axios({
        method: 'put',
        url,
        params,
        data,
    })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
    return _axios({
        method: 'delete',
        url,
        params,
    })
}

export default _axios