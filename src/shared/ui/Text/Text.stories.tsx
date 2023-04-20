import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';
// eslint-disable-next-line import/order
// eslint-disable-next-line max-len

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => { return <Text {...args} />; };

export const Primary = Template.bind({});

Primary.args = {
    title: 'Title lorem ipsum dolor...',
    text: 'Decription Decription Decription Decription Decription',
};

export const Error = Template.bind({});

Error.args = {
    title: 'Title lorem ipsum dolor...',
    text: 'Decription Decription Decription Decription Decription',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});

onlyTitle.args = {
    title: 'Title lorem ipsum dolor...',
};

export const onlyText = Template.bind({});

onlyText.args = {
    text: 'Decription Decription Decription Decription Decription',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    title: 'Title lorem ipsum dolor...',
    text: 'Decription Decription Decription Decription Decription',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});

onlyTitleDark.args = {
    title: 'Title lorem ipsum dolor...',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});

onlyTextDark.args = {
    text: 'Decription Decription Decription Decription Decription',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});

SizeL.args = {
    title: 'Title lorem ipsum dolor...',
    text: 'Decription Decription Decription Decription Decription',
    size: TextSize.L,
};

export const SizeM = Template.bind({});

SizeM.args = {
    title: 'Title lorem ipsum dolor...',
    text: 'Decription Decription Decription Decription Decription',
    size: TextSize.M,
};

export const SizeS = Template.bind({});

SizeS.args = {
    title: 'Title lorem ipsum dolor...',
    text: 'Decription Decription Decription Decription Decription',
    size: TextSize.S,
};
