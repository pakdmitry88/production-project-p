/* eslint-disable max-len */
import { useEffect } from 'react';

export function useInitialEffect(callaback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callaback();
        }
        // eslint-disable-next-line
    }, []);
}
