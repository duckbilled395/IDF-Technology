import {setNextStep} from "../../store/signUp/actions";
import {AppDispatch} from "../../store";

export const handleOnClickSignUpInfo = (dispatch: AppDispatch) => {
    dispatch(setNextStep(1))
}