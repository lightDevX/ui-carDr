import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../../layout/pages/Home/Home/Home";
import ErrorPage from "../../layout/pages/ErrorPage/ErrorPage";
import Login from "../../layout/pages/Login/Login";
import SignUp from "../../layout/pages/SignUp/SignUp";
import CheckOut from "../../layout/pages/CheckOut/CheckOut"
import Bookings from "../../layout/pages/Bookings/Bookings";


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
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/booking',
                element: <Bookings></Bookings>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]

    }
]);

export default router;