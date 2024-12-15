import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCookie } from '../../util/cookieUtil';
import { login } from '../../slices/loginSlice';
import useCustomLogin from '../../hooks/useCustomLogin';

function KakaoRedirectHandlerPage(props) {
    const [searchParams] = useSearchParams();
    const [complete,setComplete]=useState();
    const {moveToPath} = useCustomLogin();
    const dispatch = useDispatch();

    const code = searchParams.get('code');
    console.log(code)

    const getTokens = async (code) => {
        const res = await axios.get(`http://localhost:8080/member/kakao/tokens?code=${code}`);

        return res.data
    }

    useEffect(()=>{
        getTokens(code).then(data=>{
            setCookie("member",JSON.stringify(data),1)
            dispatch(login(data))
            moveToPath("/")
        })
    },[complete])


    return <div>카카오 로그인 처리 중...</div>;
}

export default KakaoRedirectHandlerPage;