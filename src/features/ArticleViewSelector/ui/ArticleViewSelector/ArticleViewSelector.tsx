import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icon/list-24-24.svg';
import TiledIcon from '@/shared/assets/icon/tiled-24-24.svg';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewTypes) => (
                <Button
                    key={viewTypes.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewTypes.view)}
                >
                    <Icon
                        width={24}
                        height={24}
                        Svg={viewTypes.icon}
                        className={classNames('', { [cls.notSelected]: viewTypes.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
};
