/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeButton, Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps{
  className?: string;
}

// eslint-disable-next-line arrow-body-style
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('about');
    const [isAuthModal, setIsAuthModal] = useState(false);

    // eslint-disable-next-line arrow-body-style
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
            </Modal>
        </div>
    );
};
