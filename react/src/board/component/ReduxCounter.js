import React, { useEffect, useState } from 'react'
import counterService, { add, sub } from 'board/service/Counter.service'

const ReduxCounter = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        setcount(0)
    }, [])
    return (
        <>
            <h1>카운터</h1>
            <div>
                <div>
                    <button
                        aria-label="+"
                        onClick={() => {
                            setcount(add)
                        }}
                    >
                        {' '}
                        +{' '}
                    </button>
                    <span>{count}</span>
                    <button
                        aria-aria-label="-"
                        onClick={() => {
                            setcount(sub)
                        }}
                    >
                        -
                    </button>
                </div>
            </div>
        </>
    )
}
export default ReduxCounter
