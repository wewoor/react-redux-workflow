/**
 * The main api service
 */
import req from './req'
import http from '../utils/http'

export default {

    getExample() {
        const arr = [0, 1, 2]
        return arr
    },

    login(user) {
        return http.post(req.LOGIN, user)
    },

}