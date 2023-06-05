import { useState } from 'react'
import styles from './Counter.module.scss'

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.wrapper}>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}> increment</button>
        </div>
    )
}
