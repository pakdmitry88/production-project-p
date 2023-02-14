import React from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line arrow-body-style
const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
