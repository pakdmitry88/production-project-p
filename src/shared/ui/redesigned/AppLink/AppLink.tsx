/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps{
className?: string;
variant?: AppLinkVariant;
children?: ReactNode;
activeClassName?: string;
}

// eslint-disable-next-line arrow-body-style
export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, variant = 'primary', activeClassName = '',
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) => classNames(cls.AppLink, { [activeClassName]: isActive }, [className, cls[variant]])}
        >
            {children}
        </NavLink>
    );
});
