import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReduxCounter from 'counter/component/ReduxCounter'
import { increase, decrease } from 'counter/reducer/counter.reducer'

const CounterContainer = () => {
    const number = useSelector((state) => state.counterReducer.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(() => dispatch(increase(1)), [dispatch])
    const onDecrease = useCallback(() => dispatch(decrease(1)), [dispatch])

    return (
        <>
        
            <ReduxCounter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
        </>
    )
}
export default CounterContainer
