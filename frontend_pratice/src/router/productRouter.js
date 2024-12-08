import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";


const Loading = <div> Loading ...</div>
const ProductList=lazy(()=>import("../pages/products/Listpage"))
const ProductAdd=lazy(()=>import("../pages/products/AddPage"))

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
        }
    ]
}

export default productRouter;