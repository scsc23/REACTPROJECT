import React, { useState } from "react";

function EventComponent() {
    const [name, setName] = useState('');
    let handleName = (e) => {   /* 이벤트 객체 활용 */
        console.log(e.target.value)
        setName(e.target.value); /* state 변경 및 input value 변경 */

    }

    return(
        <div>
            <h3>리액트 이벤트 핸들링</h3>
            <input type="text" name="name" onChange={handleName} value={name} /> {/* 이벤트 연결 */}
            <h3>체인지 된 결과: {name}</h3>
        </div>
    );
}

export default EventComponent