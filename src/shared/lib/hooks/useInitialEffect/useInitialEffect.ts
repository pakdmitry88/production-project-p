/* eslint-disable max-len */
import { useEffect } from 'react';

export function useInitialEffect(callaback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callaback();
        }
        // eslint-disable-next-line
    }, []);
}
