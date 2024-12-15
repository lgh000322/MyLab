import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, loginPostAsync } from '../../slices/loginSlice'
import { useNavigate } from 'react-router-dom'
import useCustomLogin from '../../hooks/useCustomLogin'
import KakaoComponent from './KakaoComponent'

const initState = {
    email: '',
    pw: '',
}

function LoginComponent(props) {
    const [loginParam, setLoginParam] = useState({ ...initState })
    const dispatch = useDispatch()
    const { doLogin, moveToPath } = useCustomLogin();


    const handleChange = (e) => {
        console.log(e.target.name+" ="+e.target.value)
        loginParam[e.target.name] = e.target.value;
        setLoginParam({ ...loginParam })
    }

    const handleClickLogin = () => {
        doLogin(loginParam).then(data => {
            if (data.error) {
                alert("이메일과 패스워드를 확인해주세요.")
            } else {
                moveToPath("/")
            }
        })
    }
    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-center">
                <div className="text-4xl m-4 p-4 font-extrabold text-blue-500">Login Component</div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-2/5 p-6 text-right font-bold">Email</div>
                    <input
                        className="w-1/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="email"
                        type="text"
                        value={loginParam.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-2/5 p-6 text-right font-bold">Password</div>
                    <input
                        className="w-1/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                        name="pw"
                        type="password"
                        value={loginParam.pw}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full justify-center">
                    <div className="w-2/5 p-6 flex justify-center font-bold">
                        <button className="rounded p-4 w-36 bg-blue-500 text-xl text-white" onClick={() => handleClickLogin(loginParam)}>
                            LOGIN
                        </button>
                    </div>
                </div>
                <div className="relative mb-4 flex w-full justify-center">
                    <KakaoComponent></KakaoComponent>
                </div>
            </div>
        </div>
    );

}

export default LoginComponent;