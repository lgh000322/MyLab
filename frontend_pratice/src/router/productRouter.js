import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";


const Loading = <div> Loading ...</div>
const ProductList=lazy(()=>import("../pages/products/Listpage"))
const ProductAdd=lazy(()=>import("../pages/products/AddPage"))
const ProductRead=lazy(()=>import("../pages/products/ReadPage"))
const Modify=lazy(()=>import("../pages/products/ModifyPage"))

const productRouter=()=>{
    return [
        {
            path: 'list',
            element: <Suspense fallback={Loading}><ProductList></ProductList></Suspense>
        },
        {
            path: '',
            element: <Navigate replace to={'/products/list'}></Navigate>
        },
        {
            path:'add',
            element:<Suspense fallback={Loading}><ProductAdd></ProductAdd></Suspense>
        },
        {
            path:'read/:pno',
            element:<Suspense fallback={Loading}><ProductRead></ProductRead></Suspense>
        },
        {
            path:'modify/:pno',
            element:<Suspense fallback={Loading}><Modify></Modify></Suspense>
        }
    ]
}

export default productRouter;