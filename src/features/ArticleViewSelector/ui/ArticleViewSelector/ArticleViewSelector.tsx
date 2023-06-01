/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from '@/shared/lib/classNames/classNames';
import TiledIconDeprecated from '@/shared/assets/icon/tiled-24-24.svg';

import ListIcon from '@/shared/assets/icon/burger.svg';
import TiledIcon from '@/shared/assets/icon/tile.svg';

import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => TiledIconDeprecated,
        }),
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},

                        [className],
                    )}
                    border="round"
                >
                    <HStack gap="8">
                        {viewTypes.map((viewTypes) => (
                            <Icon
                                clickable
                                onClick={onClick(viewTypes.view)}
                                Svg={viewTypes.icon}
                                className={classNames('', { [cls.notSelected]: viewTypes.view !== view })}
                            />
                        ))}
                    </HStack>
                </Card>
            )}
            off={(
                <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                    {viewTypes.map((viewTypes) => (
                        <ButtonDeprecated
                            key={viewTypes.view}
                            theme={ThemeButton.CLEAR}
                            onClick={onClick(viewTypes.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={viewTypes.icon}
                                className={classNames('', { [cls.notSelected]: viewTypes.view !== view })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            )}
        />
    );
};
