// getters
export default {
    getStoreById: (state) => (id) => {
        return state.data.find(obj => obj.id === id)
    }
}