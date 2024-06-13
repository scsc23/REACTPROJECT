import React, { useRef, useState } from "react";

function HookRef() {
    // useState
    const [form, setForm] = useState({data: '', result: ''});
    // useRef
    const inputTag = useRef(null);
    // input handling
    const handleChange = e => {
        setForm({data: e.target.value}) // input값 변경 시 마다 data 변수의 변화
    }

    // 버튼 handling - 클릭시 state는 변경되고 input태그에 focus 처리
    const handleClick = e => {
        console.log('클릭 처리 전 : ')
        console.log(inputTag)
        console.log(inputTag.current)
        setForm({data:'', result: form.data})
        // useRef 사용 - current로 ref의 현재 태그에 접근 가능
        inputTag.current.focus();

        // inputTag.current.type = 'email';
    }

    return (
        <div>
            할 일: <input type="text" value={form.data} onChange={handleChange} ref={inputTag} />
            <button type="button" onClick={handleClick}>등록하기</button>
            <br />
            결과 :  {form.result}
        </div>
    )
}

export default HookRef;