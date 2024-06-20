import React from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import User from "./User";

const pro = {
    testuser: {
        name: '홍길동',
        age: '미상',
        description: '동에번쩍 서에번쩍 신출귀몰 도적'
    },
    testuser2: {
        name: '이순신',
        age: '46',
        description: '세계사에 유래없는 해군 제독 왜란 종결자'
    }
}

function Profiles() {

    let {username} = useParams;
    const profile = pro[username];

    return (
        <div>
            <h3>사용자 목록 :{username}</h3>
            <ul>
                <li>
                    <Link to="/profiles/testuser">testuser</Link>
                </li>
                <li>
                    <Link to="/profiles/testuser2">testuser2</Link>
                </li>
            </ul>
            {/* <Outlet /> */}
            <Routes>
                <Route path="/" element={<div>유저를 선택</div>} />
                <Route path=":username" element={<User />} />
            </Routes>
        </div>
    );
}

export default Profiles;