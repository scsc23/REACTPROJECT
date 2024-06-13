import { useState } from "react";

const StateComponent = () => {
    const [msg, setData] = useState('초기값');

    const enter = () => {
        // msg = '이렇게 변경';    // 직접 설정할 수 없음
        setData('입장');
    }
    const exit = () => setData('퇴장');

    return (
        <div>
            <h3>{msg}</h3>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
        </div>
    )
}

export default StateComponent;