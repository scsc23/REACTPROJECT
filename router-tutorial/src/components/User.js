import React from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

const profileData = {
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

function User() {

    // useLocation()
    const location = useLocation();
    console.log(location);
    console.log(location.search);   // 문자열 추출

    // useSearchParams()
    const [obj, setObj] = useSearchParams();
    
    // useParams()
    const param = useParams();
    console.log(param);
    const {username} = param;
    const profile = profileData[username];

    let id = obj.get('id');
    // let key = obj.get('key');
    // console.log('obj : ' + obj);
    // console.log('id : ' + id);
    // console.log('key : ' + key);
    // obj.forEach(i => console.log(i));
    // obj.set("id", "qwer")
    // console.log("obj.set 처리 후 : "  + obj.get("id"));
    return (
        <div>
            <Link to="/">홈</Link>
            <h2>유저</h2>
            <p>사용자의 정보를 처리하여 보여주는 페이지</p>
            <div>{obj.get('id') && <h1>{id}</h1>}</div>
            <h3>profile: </h3>
            {profile ? <div>
                        <h4>{username}({profile.name})</h4>
                        <h5>나이 : {profile.age}</h5>
                        {profile.description && <p>{profile.description}</p>}
                        </div> : <div>존재하지 않는 유저</div>
            } 
        </div>
    )
}

export default User;