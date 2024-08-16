import * as React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App.tsx';
import {store} from "./store.ts";
import HomePage from "./components/homePage/HomePage.tsx";
import ResultsPage from "./components/resultsPage/ResultsPage.tsx";
import ErrorPage from "./components/errorPageWithSass/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/results",
                element: <ResultsPage/>,
            },
            {
                path: "/error",
                element: <ErrorPage/>,
            },
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
)
