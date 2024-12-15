import axios from 'axios';
import React from 'react'

function KakaoComponent(props) {

    const getURL = async () => {
        const res = await axios.get("http://localhost:8080/member/kakao/authentication")

        return res.data
    }  

    const handleClickButton = ()=>{
        getURL().then(data=>{
            window.location.href=data
        })
    }

      return (
        <div className="w-2/5 p-6 flex justify-center font-bold">
            <button className="rounded p-4 w-36 bg-yellow-500 text-xl text-white" onClick={handleClickButton}>
                카카오 로그인
            </button>
        </div>
    );
}

export default KakaoComponent;