import { AppDispatch } from 'shared/store'
import { setNextStepType } from 'shared/store/signUp/types'

export const handleOnClickSignUpInfo = (dispatch: AppDispatch, setNextStep: (order: number) => setNextStepType) => {
	dispatch(setNextStep(1))
}

export const handleOnClickPersonalInfo = (dispatch: AppDispatch, setNextStep: (order: number) => setNextStepType) => {
	dispatch(setNextStep(2))
}
