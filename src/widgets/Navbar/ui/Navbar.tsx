/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeButton, Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps{
  className?: string;
}

// eslint-disable-next-line arrow-body-style
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('about');
    const [isAuthModal, setIsAuthModal] = useState(false);

    // eslint-disable-next-line arrow-body-style
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
