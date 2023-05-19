/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icon/theme-light.svg';
import ThemeIcon from '@/shared/assets/icon/theme.svg';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

// eslint-disable-next-line arrow-body-style
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            return dispatch(saveJsonSettings({
                theme: newTheme,
                isArticlesPageWasOpen: false,
            }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
            off={(
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
                </Button>
            )}
        />

    );
});
