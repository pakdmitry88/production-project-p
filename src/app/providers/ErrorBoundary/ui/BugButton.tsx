/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './BugButton.module.scss';

interface BugButtonProps{
className?: string;
}
// компонент для тестирования ErrorBoundary
// eslint-disable-next-line arrow-body-style
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    // eslint-disable-next-line arrow-body-style
    const onThrow = () => {
        setError(true);
    };

    // eslint-disable-next-line arrow-body-style
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        // eslint-disable-next-line max-len
        <Button onClick={onThrow} className={classNames(cls.BugButton, {}, [className])}>
            {t('throw error')}
        </Button>
    );
};
