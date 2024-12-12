import React from 'react'
import BasicMenu from '../../components/menus/BasicMenu';
import LoginComponent from '../../components/member/LoginComponent';

function LoginPage() {
    return ( 
        <div className='fixed top-0 left-0 z-[1055] flex-col h-full w-full'>
            <BasicMenu></BasicMenu>
            <LoginComponent></LoginComponent>
        </div>
     );
}

export default LoginPage;