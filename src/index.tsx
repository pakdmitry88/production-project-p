import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
// eslint-disable-next-line import/order
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
    <div>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </div>,
    document.getElementById('root'),
);
