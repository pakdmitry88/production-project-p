import { lazy } from 'react';

// eslint-disable-next-line arrow-body-style
export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
