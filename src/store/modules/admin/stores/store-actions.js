import { STORE_REQUEST_GET_LIST } from './store-mutation-types'
import axios from 'axios'

export const getStoreList = ({commit}) => {
    return new Promise((resolve, reject) => {

        const params = {}

        const config = {
        }
        axios({
            method: 'get',
            url: 'http://103.221.222.158:8080/shoesapi/api/stores?access_token=283a359a-e0da-4a2d-88a2-c457c1ba4247',
            params,
            config
          })
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

        const config = {
        }
        axios.post(
            'http://103.221.222.158:8080/shoesapi/api/stores/store?access_token=283a359a-e0da-4a2d-88a2-c457c1ba4247',
            params, {
                headers: {
                    "Content-Type": 'application/json'
                }
            })
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

    axios.delete('http://103.221.222.158:8080/shoesapi/api/stores/store/'+ id +'?access_token=283a359a-e0da-4a2d-88a2-c457c1ba4247')
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

        const config = {
        }
        axios.put(
            'http://103.221.222.158:8080/shoesapi/api/stores/store?access_token=283a359a-e0da-4a2d-88a2-c457c1ba4247',
            params, {
                headers: {
                    "Content-Type": 'application/json'
                }
            })
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