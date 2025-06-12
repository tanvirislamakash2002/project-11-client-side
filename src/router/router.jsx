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
import Loading from "../pages/Loading";
import ArticlesFilterByCategory from "../pages/ArticlesFilterByCategory";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                loader: () => axios(`${import.meta.env.VITE_API_URL}/recent-articles`),
                element: <Home></Home>
            },
            {
                path: '/allArticles',
                loader: () => axios(`${import.meta.env.VITE_API_URL}/all-articles`),
                hydrateFallbackElement: <Loading></Loading>,
                element: <AllArticles></AllArticles>
            },
            {
                path: '/articleDetails/:id',
                loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/all-articles/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
                element: <ArticleDetails></ArticleDetails>
            },
            {
                path: '/postArticle',
                element: <PrivateRoute>
                    <PostArticle></PostArticle>
                </PrivateRoute>
            },
            {
                path: '/myArticles/:email',
                loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/my-articles/${params.email}`),
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRoute>
                    <MyArticles></MyArticles>
                </PrivateRoute>
            },
            {
                path: '/filter-by-category/:category',
                loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/filter-by-category/${params.category}`),
                hydrateFallbackElement: <Loading></Loading>,
                element: <ArticlesFilterByCategory></ArticlesFilterByCategory>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router