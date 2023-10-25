import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkTest from '../DarkTest';



export const Home = () => {
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

export default Home;