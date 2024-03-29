/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps{
className?: string;
short?: boolean;
}

// eslint-disable-next-line arrow-body-style
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    // eslint-disable-next-line arrow-body-style
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button onClick={toggle} variant="clear">{t(short ? 'Короткий язык' : 'Язык')}</Button>

    );
});
