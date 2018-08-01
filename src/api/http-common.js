import axios from 'axios'
//import cons from '@/api/http-common'

export const HTTP = axios.create({
  baseURL: 'https://www.yesno.wtf/api/',
  headers: {
    Authorization: 'Bearer {token}'
  }
})

