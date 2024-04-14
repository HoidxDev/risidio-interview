import { proxy } from 'valtio'

const store = proxy({
    popupOpen: false,
})

export default store