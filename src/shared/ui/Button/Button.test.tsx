import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { ThemeButton } from './Button';

/* eslint-disable arrow-body-style */
describe('Button', () => {
    test('Test render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
