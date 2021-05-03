//component
export { default as Counter } from 'counter/component/Counter'
export { default as RtkCounter } from 'counter/component/RtkCounter'

//reducer
export { default as counterReducer } from 'counter/reducer/counter.reducer'
export { default as counterSlice } from 'counter/reducer/counter.slice'

//container
export { default as RtkCounterContainer } from 'counter/container/RtkCounterContainer'
export { default as CounterContainer } from 'counter/container/CounterContainer'

//react.memo 땜에 인식을 못함
export { default as ReduxCounter } from 'counter/component/ReduxCounter'
