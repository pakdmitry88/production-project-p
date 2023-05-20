import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps{
children: ReactNode;
element?:HTMLElement;
}

// eslint-disable-next-line arrow-body-style
export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};
