/* eslint-disable react/button-has-type */
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AboutIcon from 'shared/assets/icon/about-20-20.svg';
import MainIcon from 'shared/assets/icon/main-20-20.svg';
import { Button, ButtonSize, ThemeButton } from '../../../../shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

// eslint-disable-next-line arrow-body-style
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    // eslint-disable-next-line arrow-body-style
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div>

                    <AppLink
                        className={cls.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>{t('Главная страница')}</span>

                    </AppLink>
                </div>
                <div>

                    <AppLink
                        className={cls.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}

                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('О сайте')}</span>

                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};
