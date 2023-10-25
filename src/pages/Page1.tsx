import React from "react";
import DarkTest from "../DarkTest";
import {useNavigate} from "react-router-dom";

export const Page1 = () => {
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
            <DarkTest>
                <button onClick={handleHomeClick}>ホームへ</button>
                <button onClick={handlePage1Click}>ページ１へ</button>
                <button onClick={handleLoginClick}>ログインページ</button>
            </DarkTest>
        </>
    );
};

export default Page1;