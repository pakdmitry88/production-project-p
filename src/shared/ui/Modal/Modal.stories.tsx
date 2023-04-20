import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

export const Dark = Template.bind({});

Dark.args = {
    isOpen: true,
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
