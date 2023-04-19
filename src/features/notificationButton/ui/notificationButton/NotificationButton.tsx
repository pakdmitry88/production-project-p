/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import NotificationIcon from 'shared/assets/icon/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps{
className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>

            </MobileView>

        </div>

    );
};
