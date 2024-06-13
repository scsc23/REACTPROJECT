// useState를 하나로 관리하기
import { useState } from "react";
import React from "react";

const EventComponent2 = () => {
    const [form, setForm] = useState({name: '',topic: ''}); // 객체 state

    let handleChange = (e) => {
        const copy = {...form, [e.target.name]: e.target.value};
        // spread 문법으로 복사 후 키 수정
        setForm(copy); // state 변경
    }

    let handleClick = (e) => {
        alert(`결과 : ${form.name} 님의 할일 : ${form.topic}`)
        setForm({name:'', topic:''});   // state 초기화
    }

    return (
        <div>
            <h3>리액트 이벤트 핸들링(객체)</h3>
            <input type="text" name="name" onChange={handleChange} value={form.name} />
            <br />
            <h3>변화된 값: </h3>
            <input type="text" name="topic" onChange={handleChange} value={form.topic} />
            <br />
            <h3>체인지 결과</h3>
            <button type="button" onClick={handleClick}>클릭</button>
            <br />
        </div>
    )
}

export default EventComponent2;