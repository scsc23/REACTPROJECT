import React from "react";
import { useState } from "react";

function InputSample() {

    const [inputs, setInputs] = useState({name: '', nickname: ''});

    const {name, nickname} = inputs;

    // change 이벤트 객체
    const onChange = (e) => {
        const {value, name} = e.target; //  name과 value를 추출
        setInputs({...inputs, [name]: value})
    };

    // 초기화 버튼 객체
    const onReset = () => {
        setInputs({name: '', nickname: ''});
    };


    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name}({nickname}) </b>
            </div>
        </div>
    );
}

export default InputSample