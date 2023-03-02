/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeButton, Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps{
  className?: string;
}

// eslint-disable-next-line arrow-body-style
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation('about');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    // eslint-disable-next-line arrow-body-style
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
});
