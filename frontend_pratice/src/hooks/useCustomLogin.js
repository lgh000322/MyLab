import { useDispatch, useSelector } from "react-redux";
import { Navigate, replace, useNavigate } from "react-router-dom"
import { loginPostAsync, logout } from "../slices/loginSlice";

const useCustomLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginSlice)

    const isLogin = loginState.email ? true : false;

    const doLogin = async (loginParam)=>{
        const action = dispatch(loginPostAsync(loginParam))

        return action.payload
    }

    const doLogout = ()=>{
        dispatch(logout())
    }

    const moveToPath= (path)=>{
        navigate({pathname:path},{replace:true})
    }

    const moveToLogin=()=>{
        navigate({pathname:"/member/login"},{replace:true})
    }

    const moveToLoginReturn=()=>{
        return <Navigate to={"/member/login"}></Navigate>
    }

    return {loginState,isLogin,doLogin,doLogout,moveToPath,moveToLogin,moveToLoginReturn}
}

export default useCustomLogin