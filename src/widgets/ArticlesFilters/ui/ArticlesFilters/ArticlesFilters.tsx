import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input as InputDepricated } from '@/shared/ui/deprecated/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';

interface ArticlesFiltersProps{
className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        type,
        onChangeType,
        onChangeSearch,
        search,
        onChangeSort,
        onChangeOrder,
        sort,
        order,
    } = props;
    const { t } = useTranslation();
    return (
        <Card className={classNames(cls.ArticlesFilters, {}, [className])} padding="24">
            <VStack gap="32">
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')} />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
            </VStack>
        </Card>
    );
});
