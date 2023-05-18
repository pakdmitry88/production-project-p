/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import '@/app/styles/index.scss';
import { Text } from '../../deprecated/Text/Text';

export default {
    title: 'shared/Card',
    component: Card,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => { return <Card {...args} />; };

export const Primary = Template.bind({});

Primary.args = {
    children: <Text title="test" text="text text" />,
};
