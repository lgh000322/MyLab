import { lazy, Suspense } from "react"

const Loading = <div>Loading....</div>
const Login = lazy(() => import("../pages/member/LoginPage"))
const Logout = lazy(() => import("../pages/member/LogoutPage"))
const KakaoRedirect = lazy(() => import("../pages/member/KakaoRedirectHandlerPage"))

const memberRouter = () => {
    return [
        {
            path: "login",
            element: <Suspense fallback={Loading}><Login></Login></Suspense>
        },
        {
            path: "logout",
            element: <Suspense fallback={Loading}><Logout></Logout></Suspense>
        },
        {
            path: "kakao",
            element: <Suspense fallback={Loading}><KakaoRedirect></KakaoRedirect></Suspense>
        }
    ]
}

export default memberRouter;