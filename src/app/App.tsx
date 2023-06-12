import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>ToggleTheme</button>

            <AppRouter />
        </div>
    )
}
