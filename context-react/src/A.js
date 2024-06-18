import React, { useContext, useRef } from "react";
import UserContext from "./ContextAPI2";
const A = () => {
    // useRef Hook
    const input1 = useRef(null);
    const input2 = useRef(null);

    // useContext Hook을 이용해 값 조회 or 변경
    const {state, action} = useContext(UserContext);

    const handleClick = () => {
        action.setUser({id: input1.current.value, name: input2.current.value});
        input1.current.value = '';
        input2.current.value = '';
    }

    return (
        <div>
            <h3>A component</h3>
            <input type='text' ref={input1} />
            <input type='text' ref={input2} />
            <button onClick={handleClick}>데이터 변경</button>

            <div>
                {state.id}<br />
                {state.name}<br />
            </div>
        </div>
    );
}

export default A;