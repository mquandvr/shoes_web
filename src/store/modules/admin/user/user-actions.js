import { USER_REQUEST } from './user-mutation-types'
import http from '@/api/http-common'

// actions
export const getUserRole = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        const params = {
            user: data.username
        }

        http.get('api/users/user', params)
        .then(resp => {
            commit(USER_REQUEST, resp.role)
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export default {
    getUserRole
}