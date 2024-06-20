import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    
    // useNavigate()
    let nav = useNavigate();

    const goHome = () => {
        nav('/');
    }
    const goBoard = () => {
        nav('/board');
    }
    const goUser = () => {
        nav('/user');
    }
    return (
        <div>
            <button onClick={() => nav(-1)}>뒤로</button>
            <button onClick={goHome}>홈</button>
            <button onClick={goBoard}>보드</button>
            <button onClick={goUser}>유저</button>
            <button onClick={() => nav(1)}>앞으로</button>
        </div>
    )
}

export default Header;