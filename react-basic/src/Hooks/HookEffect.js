import React, { useEffect } from "react";

function HookEffect() {
    /* rendering시 마다 동작 */
    useEffect(() => {
        console.log('rendering 완료')
    });

    /* mount로 redering 이후 실행하지 않는 경우*/
    useEffect(() => {
        console.log('처음만 실행하는 경우')
    }, []);

    // useState
    const [name, setName] = React.useState('');
    const handleName = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        console.log('name 업데이트 시 실행됨')
    }, [name])

    return (
        <div>
            이름 : <input type="text" onChange={handleName} /><br />
            이름 : {name}<br />
        </div>
    )
}

export default HookEffect;