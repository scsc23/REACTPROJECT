import React from "react";
import { useParams } from "react-router-dom";

function Info() {

    // useParams() 훅
    let param = useParams();
    console.log(param);

    return (
        <div>
            <h2>{param.num}인포</h2>
            <p>React Router를 이용한 페이지 처리 결과</p>
        </div>
    )
}

export default Info;