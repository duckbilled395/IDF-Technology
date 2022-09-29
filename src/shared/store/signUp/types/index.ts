import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../index";

export type InitialStateType = {
    breadcrumbs: {
        first: string,
        second: string,
        order: number
    }
}

export enum signUpTypeEnum {
    SET_STEP_ORDER = 'SET_STEP_ORDER'
}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export type setNextStepType = {
    type: signUpTypeEnum.SET_STEP_ORDER,
    payload: any
}

export type signUpActionTypes = setNextStepType
