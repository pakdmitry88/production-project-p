import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ArticlesPage>;
const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Normal = Template.bind({});
Normal.args = {};
