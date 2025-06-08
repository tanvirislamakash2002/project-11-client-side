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
import axios from "axios";
import ArticleDetails from "../pages/ArticleDetails";

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
            loader:()=>axios(`${import.meta.env.VITE_API_URL}/all-articles`),
            hydrateFallbackElement:<h2>fall back</h2>,
            element:<AllArticles></AllArticles>
        },
        {
            path:'/articleDetails/:id',
            loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/all-articles/${params.id}`),
            hydrateFallbackElement:<h2>fall back</h2>,
            element:<ArticleDetails></ArticleDetails>
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