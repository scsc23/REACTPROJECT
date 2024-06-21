import React, { useReducer } from "react";

// Counter component를 reducer로 작성
// type 지정 : Action
type Action = {type: 'INCREASE'} | {type: 'DECREASE'};

// reducer 함수 구현
function reducer(state: number, action: Action): number {
    switch(action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error('핸들이없다');
    }
}

function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default CounterReducer;