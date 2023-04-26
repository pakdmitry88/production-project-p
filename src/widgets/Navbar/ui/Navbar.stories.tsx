/* eslint-disable max-len */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@/app/styles/index.scss';
// eslint-disable-next-line import/order
// eslint-disable-next-line max-len
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/Navbar',
    component: Navbar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});

Light.args = {};

Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [(ThemeDecorator(Theme.DARK))];
Dark.decorators = [StoreDecorator({})];

export const AuthNavbar = Template.bind({});

AuthNavbar.args = {};

AuthNavbar.decorators = [StoreDecorator({
    user: { authData: {} },
})];
