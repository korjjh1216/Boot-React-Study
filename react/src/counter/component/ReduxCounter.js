import React from 'react'

const ReduxCounter = React.memo(({ number, onIncrease, onDecrease }) => {
    return (
        <>
            <h1>카운터</h1>
            <div>
                <div>
                    <button aria-label="+" onClick={onIncrease}>
                        {' '}
                        +
                    </button>
                    <span>{number}</span>
                    <button aria-aria-label="-" onClick={onDecrease}>
                        -
                    </button>
                </div>
            </div>
        </>
    )
})
export default ReduxCounter
