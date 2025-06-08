import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AllArticles from "../pages/AllArticles";
import PostArticle from "../pages/PostArticle";
import MyArticles from "../pages/MyArticles";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allArticles',
            element:<AllArticles></AllArticles>
        },
        {
            path:'/postArticle',
            element:<PostArticle></PostArticle>
        },
        {
            path:'/myArticles',
            element:<MyArticles></MyArticles>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
    ]
  },
]);

export default router