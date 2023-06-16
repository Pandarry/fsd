import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button'

import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} size={ButtonSize.L} className={styles.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi vitae deleniti dolor expedita illo ea perferendis neque ducimus officia, provident quis pariatur nesciunt
                soluta! Molestias facere labore rem corporis?
            </Modal>
        </div>
    )
}
