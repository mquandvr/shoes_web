import { STORE_REQUEST_GET_LIST } from './store-mutation-types'
import http from '@/api/http-common'

export const getStoreList = ({commit}) => {
    return new Promise((resolve, reject) => {

        http.get('api/stores')
        .then(resp => {
            //console.log(resp)
            commit(STORE_REQUEST_GET_LIST, resp.data)
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })

}

export const addStore = ({commit}, store) => {
    return new Promise((resolve, reject) => {
        // commit(AUTH_REQUEST)

        const params = JSON.stringify({
            "name": store.storeName,
            "address" : store.address
        })

        http.post('api/stores/store', params)
        .then(resp => {
            console.log(resp)
            //commit(STORE_REQUEST_GET_LIST, resp.data)
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })

}

export const deleteStoreById = ({commit}, id) => {

    http.delete('api/stores/store/'+ id)
    .then(resp => {
        console.log('success')
    })

}

export const editStore = ({commit}, obj) => {
    return new Promise((resolve, reject) => {
        // commit(AUTH_REQUEST)

        const params = JSON.stringify({
            "name": obj.storeName,
            "address" : obj.address,
            "id": obj.id
        })

        http.put('api/stores/store', params,)
        .then(resp => {
            console.log(resp)
            //commit(STORE_REQUEST_GET_LIST, resp.data)
            resolve(resp)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export default {
    getStoreList,
    addStore,
    editStore,
    deleteStoreById
}