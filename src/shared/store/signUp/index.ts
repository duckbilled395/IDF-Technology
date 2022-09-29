import {InitialStateType, signUpActionTypes, signUpTypeEnum} from "./types";

const initialState: InitialStateType = {
    breadcrumbs: {
        first: 'SignUpInfo',
        second: 'PersonalInfo',
        order: 1
    }
}

export const signUp = (state = initialState, action: signUpActionTypes): InitialStateType => {
    switch (action.type) {
        case signUpTypeEnum.SET_STEP_ORDER:
            return { ...state, breadcrumbs: {...state.breadcrumbs, order: action.payload} }
        default:
            return state
    }
}

export default signUp