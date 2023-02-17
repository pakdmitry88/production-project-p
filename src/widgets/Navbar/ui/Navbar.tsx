import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps{
  className?: string;
}

// eslint-disable-next-line arrow-body-style
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>

        </div>
    );
};
