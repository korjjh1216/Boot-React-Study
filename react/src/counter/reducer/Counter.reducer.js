import { createAction, handleActions } from 'redux-actions'

const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export const increase = createAction(INCREASE, (plus) => plus)
export const decrease = createAction(DECREASE, (minus) => minus)

const initalState = { number: 0 }

const counterReducer = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + action.payload }),
        [DECREASE]: (state, action) => ({ number: state.number - action.payload }),
    },
    initalState
)
export default counterReducer
