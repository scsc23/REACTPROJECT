import React from "react";

// input 태그 2개(계정, 이메일) 버튼
function CreateUser({username, email, onChange, onCreate}) {
    
    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );

}

// React.memo를 사용한 component re-rendering 방지
// component의 re-rendering 성능 최적화를 위한 React.memo 함수
// component에서 re-render이 필요한 경우에만 re-rendering 하도록 설정

export default React.memo(CreateUser);

