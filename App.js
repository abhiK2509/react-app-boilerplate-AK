import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);