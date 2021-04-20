import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
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
                            setcount(count + 1)
                        }}
                    >
                        {' '}
                        +{' '}
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="-"
                        onClick={() => {
                            setcount(count - 1)
                        }}
                    >
                        -
                    </button>
                </div>
            </div>
        </>
    )
}
export default Counter
