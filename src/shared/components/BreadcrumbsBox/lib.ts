import { AppDispatch } from '../../store'
import { setNextStepType } from '../../store/signUp/types'

export const handleOnClickSignUpInfo = (dispatch: AppDispatch, setNextStep: (order: number) => setNextStepType) => {
	dispatch(setNextStep(1))
}