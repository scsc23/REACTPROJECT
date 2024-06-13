import React from "react";

/* 
    props.children
        컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 때
        props.children을 조회해서 사용
 */

// function Wrapper({children}) {
function Wrapper(props) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    // console.log(children);

    return (
        <div style={style}>
            {props.children}    {/* children으로 들어온 component를 렌더링에 추가 */}
        </div>
    );
}

export default Wrapper;