import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDeatails from "../Pages/NewsDeatails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HomeLayout,
            children: [
                {
                    index: true,
                    path: "/",
                    Component: Home,
                },
                {
                    path: "/category/:id",
                    loader: () => fetch("/news.json"),
                    hydrateFallbackElement: <Loading></Loading>,
                    Component: CategoryNews,
                },
                {
                    path: "/*",
                    element: <h2>ErrorPage </h2>
                }
            ],
        },
        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                {
                    path: "/auth/login",
                    Component: Login,
                },
                {
                    path: "/auth/register",
                    Component: Register,
                },
            ]
        },
        {
            path: "/news-deatails/:id",
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading></Loading>,
            element: <PrivetRoute><NewsDeatails></NewsDeatails></PrivetRoute>,
        }
    ]
)