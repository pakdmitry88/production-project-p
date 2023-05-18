/* eslint-disable no-unused-vars */
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton{
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',

}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  theme?: ThemeButton;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: ButtonSize;
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean;
  /**
   * Содержимое кнопки
   */
  children?: ReactNode;
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

// eslint-disable-next-line arrow-body-style
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        disabled,
        fullWidth,
        size = ButtonSize.M,
        ...otherProps
    } = props;
    // @ts-ignore
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
