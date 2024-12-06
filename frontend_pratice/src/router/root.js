import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter.js";

const { createBrowserRouter }=require("react-router-dom");

const Loading=<div className="bg-red-700">Loading ...</div>


const Main=lazy(()=>import("../pages/MainPage"));
const About=lazy(()=>import("../pages/AboutPage"))
const TodoIndex=lazy(()=>import("../pages/todo/IndexPage"))

const root= createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main></Main></Suspense>
    },
    {
        path:"about",
        element: <Suspense fallback={Loading}><About></About></Suspense>
    },
    {
        path:"todo",
        element: <Suspense fallback={Loading}><TodoIndex></TodoIndex></Suspense>,
        children: todoRouter()
    }
])

export default root;