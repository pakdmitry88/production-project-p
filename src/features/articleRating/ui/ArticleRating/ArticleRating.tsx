import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps{
className?: string;
articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArtcileMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArtcileMutation({
                // @ts-ignore
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
        // @ts-ignore
    }, [articleId, rateArtcileMutation, userData.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
};

export default ArticleRating;
