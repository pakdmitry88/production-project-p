/* eslint-disable react/button-has-type */
// eslint-disable-next-line import/no-duplicates
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import { Button, ButtonSize, ThemeButton } from '../../../../shared/ui/Button/Button';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

// eslint-disable-next-line arrow-body-style
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const sidebarItemsList = useSelector(getSidebarItems);
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
                    {sidebarItemsList.map((item) => (
                        <SideBarItem
                            item={item}
                            collapsed={collapsed}
                            key={item.path}
                        />
                    ))}
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
});
