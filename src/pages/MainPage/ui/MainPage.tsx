/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Counter } from '@/entities/Counter';

// eslint-disable-next-line arrow-body-style
const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <Counter />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
