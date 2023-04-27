/* eslint-disable react/no-array-index-key */
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PAGE_ID } from '@/widgets/Page/Page';
import { ArticleView } from '@/entities/Article/model/consts/articleConsts';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticlelIstItemSceleton';

interface ArticleListProps{
className?: string;
articles: Article[];
isLoading?: boolean;
target?: HTMLAttributeAnchorTarget;
view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ));
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}

            {isLoading && getSkeletons(view)}
        </div>
    );
};
