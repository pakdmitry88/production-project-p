import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

// eslint-disable-next-line arrow-body-style
const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
