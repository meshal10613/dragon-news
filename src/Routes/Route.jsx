import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
                    Component: CategoryNews,
                },
                {
                    path: "/about",
                    
                },
                {
                    path: "/*",
                    element: <h2>ErrorPage </h2>
                }
            ]
        }
    ]
)