/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { getArticle } from '@/pages/ArticlesPage/model/slices/articlePageSlice';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps{
className?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
    const { className } = props;
    const articles = useSelector(getArticle.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const { t } = useTranslation();

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
};
