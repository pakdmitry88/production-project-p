import { lazy } from 'react';

// eslint-disable-next-line arrow-body-style
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
