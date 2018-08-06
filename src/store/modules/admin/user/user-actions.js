import { 
    USER_REQUEST_GET_ROLE_LIST, 
    USER_REQUEST_GET_LIST, 
    STORE_REQUEST_GET_LIST,
    USER_REQUEST_GET_USER_BY_ID,
    USER_MODE_SCREEN,
} from './user-mutation-types'
import http from '@/api/http-common'

// actions
// user role
export const getUserRoleAndStores = ({commit}) => {
    return new Promise((resolve, reject) => {

        Promise.all([
            http.get('api/users/roles'),
            http.get('api/stores')
        ])
        .then(((res) => {
            // do something with both responses
            commit(USER_REQUEST_GET_ROLE_LIST, res[0].data)
            commit(STORE_REQUEST_GET_LIST, res[1].data)
            resolve(res)
        }))
        .catch(err => {
            reject(err)
        })
    })
}

// list user 
export const getUsers = ({commit}) => {
    return new Promise((resolve, reject) => {
        http.get('api/users')
        .then(resp => {
            commit(USER_REQUEST_GET_LIST, resp.data)
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export const getUserById = ({commit}, id) => {
    return new Promise((resolve, reject) => {
        http.get('api/users/user/' + id)
        .then(resp => {
            commit(USER_REQUEST_GET_USER_BY_ID, resp.data)
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export const addUser = ({commit}, data) => {
    return new Promise((resolve, reject) => {

        const params = JSON.stringify(data)

        http.post('api/users/user', params)
        .then(resp => {
            console.log('add user success'+ resp.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export const editUser = ({commit}, data) => {
    return new Promise((resolve, reject) => {

        const params = JSON.stringify(data)

        http.put('api/users/user', params)
        .then(resp => {
            console.log('edit user success'+ resp.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

// delete user by id
export const deleteUserById = ({commit}, data) => {

    return new Promise((resolve, reject) => {
        http.get('api/users/user/delete/'+ data.id)
        .then(resp => {
            // commit(USER_REQUEST_DELETE_BY_ID)
            console.log('delete success')
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export const doChangeModeScreen = ({commit}, payload) => {

    localStorage.setItem('user-mode', payload.modeScreen)
    commit(USER_MODE_SCREEN, payload.modeScreen)
}

export default {
    getUserRoleAndStores,
    getUsers,
    getUserById,
    addUser,
    editUser,
    deleteUserById,
    doChangeModeScreen,
}