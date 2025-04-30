import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Home,
            children: [
                {
                    index: true,
                    path: "/",
                },
                {
                    path: "/*",
                    element: <h2>ErrorPage </h2>
                }
            ]
        }
    ]
)