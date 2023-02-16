import { lazy } from 'react';

// eslint-disable-next-line arrow-body-style
export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
