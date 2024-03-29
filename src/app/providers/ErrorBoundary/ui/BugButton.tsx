import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};
