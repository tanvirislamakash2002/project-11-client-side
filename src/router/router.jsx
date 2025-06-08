import {
  createBrowserRouter,
} from "react-router";
import App from "../App";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            path:'/',
            element:<App></App>
        }
    ]
  },
]);

export default router