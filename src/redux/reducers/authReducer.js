import { SIGNOUT } from '../../constants/actionTypes'

const initialState = {
isAuthenticated: true,
user: {}
}

export default (state = initialState, { type }) => {
    switch (type) {

    case SIGNOUT:
        return {
            isAuthenticated: false,
        }

    default:
        return state
    }
}
