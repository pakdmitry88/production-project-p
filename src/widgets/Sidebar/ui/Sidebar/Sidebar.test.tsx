/* eslint-disable arrow-body-style */
import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
// eslint-disable-next-line max-len
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
