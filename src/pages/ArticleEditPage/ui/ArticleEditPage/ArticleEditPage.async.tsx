import { lazy } from 'react';

// eslint-disable-next-line arrow-body-style
export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleEditPage')), 1500);
}));
