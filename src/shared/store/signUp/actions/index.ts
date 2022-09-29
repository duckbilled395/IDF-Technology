import {setNextStepType, signUpTypeEnum} from "../types";

export const setNextStep = (order: number): setNextStepType => ({
    type: signUpTypeEnum.SET_STEP_ORDER,
    payload: order
})