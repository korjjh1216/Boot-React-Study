import React from 'react'

const RtkCounter = ({ number, onIncrease, onDecrease }) => {
    return (
        <>
            <h1>슬라이스 카운터</h1>
            <div>
                <div>
                    <button aria-label="+" onClick={onIncrease}> + </button>
                    <span>{number}</span>
                    <button aria-label="-" onClick={onDecrease}> - </button>
                </div>
            </div>
        </>
    )
}
export default RtkCounter
