import { lazy } from 'react';

// eslint-disable-next-line arrow-body-style
export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
