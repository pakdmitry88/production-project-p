/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
// eslint-disable-next-line import/order
import { Theme } from 'app/providers/ThemeProvider';
// eslint-disable-next-line max-len
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/profile',
    },
} as ComponentMeta<typeof ProfilePage>;

// eslint-disable-next-line max-len
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 34,
            country: Country.Tajikistan,
            lastname: 'Pak',
            first: 'Dima',
            city: 'Busan',
            currency: Currency.RUB,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 34,
            country: Country.Tajikistan,
            lastname: 'Pak',
            first: 'Dima',
            city: 'Busan',
            currency: Currency.RUB,
        },
    },
})];
