import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../../layout/pages/Home/Home/Home";
import ErrorPage from "../../layout/pages/ErrorPage/ErrorPage";
import Login from "../../layout/pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]

    }
]);

export default router;