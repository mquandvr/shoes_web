
// initial state
export default {
    userRole: 'ADMIN',
    users: [],
    user: {
        fullName: '',
        email: '',
        birthday: '',
        address: '',
        mobilePhone: '',
        username: '',
        password: '',
        remarks: '',
        role: '',
        storeId: '',
        active: true
    },
    roles: {},
    stores: {},
    modeScreen: localStorage.getItem('user-mode') || '',
}