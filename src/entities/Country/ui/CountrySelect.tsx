/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDepricated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const props = {
        className,
        value,
        items: options,
        defaultValue: t('Укажите валюту'),
        label: t('Укажите валюту'),
        onChange: onChangeHandler,
        readonly,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListBoxDepricated {...props} />}
        />
    );
});
