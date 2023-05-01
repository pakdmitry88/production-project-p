import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

// eslint-disable-next-line arrow-body-style
const ForbiddenPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="ForbiddenPage">
            {t('Доступ запрещен! У вас нет доступа к этой странице')}
        </Page>
    );
};

export default ForbiddenPage;
