import React from "react";
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

function MyPage() {

    // useNavigate()
    // rendering 과정에서 useNavigate()를 사용할 수 없다는 경고
    // let nav = useNavigate();
    // let loginYN = false;    // 로그인 false
    // if (!loginYN) {
    //     nav('/');
    // }

    // 쿼리스트링으로 로그인 여부 전달(boolean)
    // 로그인 여부에 따라 동작 확인
    const [obj] = useSearchParams();

    let loginYN = obj.get('login'); // 로그인 false
    if (!loginYN) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div>
            먼저 로그인 하시오
        </div>
    )
}

export default MyPage;