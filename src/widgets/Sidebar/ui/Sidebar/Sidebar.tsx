import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const { t, i18n } = useTranslation()

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div data-testid="sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button className={styles.collapseBtn} size={ButtonSize.L} square theme={ButtonTheme.BACKGROUND_INVERTED} data-testid="sidebar-toggle" onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                <AppLink to={RoutePath.main}>
                    <MainIcon className={styles.icon} />
                    <span>{t('Главная страница')}</span>
                </AppLink>

                <AppLink to={RoutePath.about}>
                    <AboutIcon className={styles.icon} />
                    <span>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    )
}
