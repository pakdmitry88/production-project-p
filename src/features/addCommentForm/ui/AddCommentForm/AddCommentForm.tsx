/* eslint-disable import/order */
/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
/* eslint-disable i18next/no-literal-string */
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import cls from './AddCommentForm.module.scss';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface AddCommentFormProps{
className?: string;
onSendComment: (text: string) => void;
}

const resucers: ReducersList = {
    addCommentForm: addCommentFormReducer,

};

const AddCommentForm = (props : AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={resucers} removeAfterUnmount>
            <HStack
                data-testid="AddCommentForm"
                justify="between"
                max
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    data-testid="AddCommentForm.Input"
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    data-testid="AddCommentForm.Button"
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
