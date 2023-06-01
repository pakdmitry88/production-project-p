/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationIconDeprecated from '@/shared/assets/icon/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icon/notification.svg';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { NotificationList } from '@/entities/Notification';
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

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
        
                        <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
                    

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
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>

            </MobileView>

        </div>

    );
};
