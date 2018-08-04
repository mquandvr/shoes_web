
import { HTTP_ACCESS_TOKEN } from '@/utils/constants'

// initial state
export default {
    status: '',
    token: localStorage.getItem(HTTP_ACCESS_TOKEN) || '',
    permission: ''
}