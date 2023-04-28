/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

// eslint-disable-next-line arrow-body-style
const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard
                title="Как вам статья"
                feedbackTitle="Оставьте отзыв о статье"
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
