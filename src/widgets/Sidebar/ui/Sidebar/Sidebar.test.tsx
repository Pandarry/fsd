import { render, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('Button', () => {
    test('test render', () => {
        render(<Sidebar />)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('test themes', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
