import { FunctionComponent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps{
className?: string;
theme?: AppLinkTheme;
}

// eslint-disable-next-line arrow-body-style
export const AppLink: FunctionComponent<AppLinkProps> = (props) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};
