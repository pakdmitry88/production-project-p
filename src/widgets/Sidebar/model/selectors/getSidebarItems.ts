import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icon/main-20-20.svg';
import AboutIconDeprecated from '@/shared/assets/icon/about-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icon/profile-20-20.svg';
import ArticleIconDeprecated from '@/shared/assets/icon/article_20_20.svg';

import MainIcon from '@/shared/assets/icon/home.svg';
import ArticleIcon from '@/shared/assets/icon/article.svg';
import AboutIcon from '@/shared/assets/icon/Info.svg';
import ProfileIcon from '@/shared/assets/icon/avatar.svg';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
