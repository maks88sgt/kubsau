import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {Provider} from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { AppRoutes } from './AppRoutes';
import * as serviceWorker from './serviceWorker';
import {store} from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(AppRoutes);

root.render(
    <HelmetProvider>
        <App>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </App>
    </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();
