import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

export const BugButton = () => {
    const [error, setError] = useState(false)

    const onThrowErr = () => setError(true)
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return <Button onClick={onThrowErr}>Throw err</Button>
}
//Компонент для тестированя error boundary
