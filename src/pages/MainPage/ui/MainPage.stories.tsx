/* eslint-disable max-len */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@/app/styles/index.scss';
// eslint-disable-next-line import/order
import { Theme } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line max-len
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof MainPage>;

// eslint-disable-next-line max-len
const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
