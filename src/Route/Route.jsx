import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Components/Homepage/Homepage";
import Signin from "../Components/Signin/Signin";
import Signup from "../Components/Signup/Signup";
import Chef from "../Components/Chef/Chef";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import FavRecipe from "../Components/FavRecipe/FavRecipe";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><Chef></Chef></PrivateRoute>
            },
            {
                path: 'my-recipe',
                element: <FavRecipe></FavRecipe>,
            }
        ]
    }
])