/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line import/no-duplicates
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { getSidebarItems } from '@/widgets/Sidebar/model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Button, ButtonSize, ThemeButton } from '../../../../shared/ui/deprecated/Button/Button';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icon/arrow-bottom.svg';

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
        
                        <aside
                            data-testid="sidebar"
                            className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [
                                className,
                            ])}
                        >
                            <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
                            <VStack role="navigation" gap="8" className={cls.items}>
                                <div>
                                    {sidebarItemsList.map((item) => (
                                        <SideBarItem
                                            item={item}
                                            collapsed={collapsed}
                                            key={item.path}
                                        />
                                    ))}
                                </div>
                            </VStack>
                            <Icon
                                data-testid="sidebar-toggle"
                                onClick={onToggle}
                                className={cls.collapseBtn}
                                Svg={ArrowIcon}
                                clickable
                            />
                            <div className={cls.switchers}>
                                <ThemeSwitcher />
                                <LangSwitcher
                                    short={collapsed}
                                    className={cls.lang}
                                />
                            </div>
                        </aside>
                    
    );
});
