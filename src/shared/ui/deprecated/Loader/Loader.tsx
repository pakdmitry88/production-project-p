/* eslint-disable arrow-body-style */
import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps{
className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
