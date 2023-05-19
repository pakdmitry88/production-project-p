/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar';
import cls from './SideBarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SideBarItemProps{
  item: SidebarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <AppLink
                    className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
                    to={item.path}
                    activeClassName={cls.active}
                >
                    <Icon Svg={item.Icon} />
                    <span className={cls.link}>{t(item.text)}</span>

                </AppLink>
            )}
            off={(
                <AppLinkDeprecated
                    className={classNames(cls.item, { [cls.collapsed]: collapsed })}
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>

                </AppLinkDeprecated>
            )}
        />
    );
});
