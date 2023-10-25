import React from 'react'
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };
    const handlePage1Click = () => {
        navigate('/page1');
    };
    const handleLoginClick =() => {
        navigate('/Login');
    }
    return (
        <>
            Login(ダークテーマ非読込)<br />
            <button onClick={handleHomeClick}>ホームへ</button>
            <button onClick={handlePage1Click}>ページ１へ</button>
            <button onClick={handleLoginClick}>ログインページ</button>
        </>
    )
}
