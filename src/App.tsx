import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import './index.scss'

export const App = () => {
    return (
        <div className="app">
            <Link to="/">Главная страница</Link>
            <Link to="/about">О сайте</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
