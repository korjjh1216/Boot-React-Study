import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RtkCounter from 'counter/component/RtkCounter'
import { increase, decrease } from 'counter/reducer/counter.slice'

const RtkCounterContainer =() =>{

    const dispatch =useDispatch()
    return(<>
     <RtkCounter number={useSelector(state =>state.counterSlice.number)}
     onIncrease={()=>dispatch(increase())} 
     onDecrease={()=>dispatch(decrease())} />
    </>)
}
export default RtkCounterContainer