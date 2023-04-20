import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@/app/styles/index.scss';
// eslint-disable-next-line import/order
import { Theme } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line max-len
import { ThemeDecorator } from '../../../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

export default {
    title: 'widget/Loader',
    component: Loader,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});

Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
