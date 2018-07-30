import axios from 'axios'
import cons from '@/api/http-common'

export const HTTP = axios.create({
  baseURL: cons.HTTP_REQUEST_URL,
  headers: {
    Authorization: 'Bearer {token}'
  }
})

