import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SideBarItem.module.scss';
import { SidebarItemType } from '../../model/items';

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
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>

        </AppLink>
    );
});
