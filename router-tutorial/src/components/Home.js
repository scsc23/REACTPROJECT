import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {

    return (
        <div>
            <ul>
                {/* 
                    Link 태그로 다른 페이지로 이동 
                    to 속성으로 연결할 주소를 작성
                    어느 component에서도 사용 가능
                    Routes 사이에 있는 경로를 이동할 때 사용
                */}
                {/* <li><Link to="/">홈</Link></li>
                <li><a href="/user">회원 페이지(a)</a></li>
                <li><Link to="/info">정보 페이지</Link></li>
                <li><Link to="/user">회원 페이지(Link)</Link></li>
                <li>
                    <Link to="/user?id=aaa111&key=1">회원 페이지(Link)</Link>
                </li>                 */}
            </ul>
            {/* <Header /> */}
            <hr />
            <ul>
                <li>
                    <Link to='/info/1'>Info 1번</Link>
                    <Link to='/info/2'>Info 2번</Link> 
                    <Link to='/mypage'>마이페이지</Link> 
                </li>
            </ul>
            <h2>홈</h2>
            <p>여기는 사이트 대문</p>
        </div>
    )
}

export default Home;