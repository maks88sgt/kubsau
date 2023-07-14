import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppRoutes } from './AppRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(AppRoutes);

root.render(
  <HelmetProvider>
    <App>
      <RouterProvider router={router} />
    </App>
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();
