/* eslint-disable i18next/no-literal-string */
import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icon/copy-20-20.svg';
import { Button, ThemeButton } from '../Button/Button';
import cls from './Code.module.scss';
import { Icon } from '../Icon/Icon';

interface CodeProps{
className?: string;
text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ThemeButton.CLEAR} className={cls.copyBtn}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
