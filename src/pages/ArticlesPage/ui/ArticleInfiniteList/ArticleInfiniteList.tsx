/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { getArticle } from '@/pages/ArticlesPage/model/slices/articlePageSlice';
import { Text } from '@/shared/ui/deprecated/Text';

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
