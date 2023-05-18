import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import cls from './PageError.module.scss';

interface PageErrorProps{
className?: string;
}

// eslint-disable-next-line arrow-body-style
export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    // eslint-disable-next-line arrow-body-style
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
