/**
 * fetch data
 */

import 'whatwg-fetch'
import { interceptor } from '../interceptor'

class Http {

    get(url) { // GET请求
        return this.request(url, {
            method: 'GET'
        })
    }

    post(url, body) { // POST请求
        let options = {
            method: 'POST',
        }
        if (body) options.body = JSON.stringify(body)
        return this.request(url, options)
    }

    request(url, options) { // 根请求
        options.headers = this.defaultHeader()
        return fetch(url, options)
        .then(response => response.json())
        .then(interceptor).catch( err => console.error(err))
    }

    defaultHeader() { // 默认头
        let header = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };
        return header
    }

    build(url, params) { // URL构建方法
        var ps = []
        if (params) {
            for (var p in params) {
                if (p) {
                    ps.push(p + '=' + encodeURIComponent(params[p]));
                }
            }
        }
        return url + "?" + ps.join('&')
    }

}

export default new Http()