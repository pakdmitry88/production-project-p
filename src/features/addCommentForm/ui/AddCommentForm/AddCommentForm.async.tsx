/* eslint-disable max-len */
import { FunctionComponent, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';
// eslint-disable-next-line arrow-body-style
export const AddCommentFormAsync = lazy<FunctionComponent<AddCommentFormProps>>(() => import('./AddCommentForm'));
