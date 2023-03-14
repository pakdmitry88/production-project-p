import { lazy } from 'react';

// eslint-disable-next-line arrow-body-style
export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
