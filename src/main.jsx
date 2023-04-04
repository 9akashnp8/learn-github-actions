import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import ErrorPage from './error-page';
import Employees, {loader as employeeLoader } from './routes/employee';
import Login from './routes/login';

// 3rd part
import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import "@fontsource/inter"

import { theme, darkTheme } from "./lib/theme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "employee",
                element: <Employees />,
                loader: employeeLoader
            }
        ]
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CssBaseline />
        <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
