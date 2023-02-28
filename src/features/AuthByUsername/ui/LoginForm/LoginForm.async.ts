/* eslint-disable max-len */
import { FunctionComponent, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// eslint-disable-next-line arrow-body-style
export const LoginFormAsync = lazy<FunctionComponent<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
