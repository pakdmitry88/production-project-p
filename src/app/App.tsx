/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

// eslint-disable-next-line arrow-body-style
const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>

            </Suspense>
        </div>
    );
};

export default App;
