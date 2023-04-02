/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps{
className?: string;
title?: string;
text?: string;
theme?: TextTheme;
align?: TextAlign;
size?: TextSize;
}

export const Text = memo(({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
}: TextProps) => {
    // const mods: Mods = {
    //     [cls[theme]]: true,
    //     [cls[align]]: true,
    // };
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true, [cls[align]]: true, [cls[size]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
