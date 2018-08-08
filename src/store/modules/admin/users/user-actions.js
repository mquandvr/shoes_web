import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR, AUTH_PERMISSION } from './user-mutation-types'
import axios from 'axios'

export const getUserList = ({commit}) => {
    return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)

        const params = new URLSearchParams();
        params.append('access_token', 'f5571f7f-bfd3-4562-a056-a3fcc548bd44');

        const config = {
        }
        axios({
            method: 'get',
            url: 'http://dev.maxb.vn/api/users/user',
            params,
            config
          })
        .then(resp => {
            console.log(resp)
            //localStorage.setItem(HTTP_ACCESS_TOKEN, resp.data[HTTP_ACCESS_TOKEN])

            //commit(AUTH_SUCCESS, resp.data[HTTP_ACCESS_TOKEN])
            //commit(AUTH_PERMISSION, user.username)
            //dispatch(USER_REQUEST)
            resolve(resp)
        })
        .catch(err => {
            //commit(AUTH_ERROR, err)
            //localStorage.removeItem(HTTP_ACCESS_TOKEN)
            reject(err)
        })
    })

}

export const addUser = ({commit}, user) => {
    
    const data = {
        "email": user.email,
        "password": user.password,
        "remarks": user.remarks,
        "address": user.address,
        "username": user.username
    }

    const accessToken = "f5571f7f-bfd3-4562-a056-a3fcc548bd44"
    const config = {}
    axios({
        method: 'post',
        url: 'http://dev.maxb.vn/api/users/user?' + accessToken,
        data,
        config
      })
    .then(resp => {
        console.log(resp)
        //localStorage.setItem(HTTP_ACCESS_TOKEN, resp.data[HTTP_ACCESS_TOKEN])

        //commit(AUTH_SUCCESS, resp.data[HTTP_ACCESS_TOKEN])
        //commit(AUTH_PERMISSION, user.username)
        //dispatch(USER_REQUEST)
        resolve(resp)
    })
    .catch(err => {
        //commit(AUTH_ERROR, err)
        //localStorage.removeItem(HTTP_ACCESS_TOKEN)
        reject(err)
    })
}

export default {
    getUserList,
    addUser
}