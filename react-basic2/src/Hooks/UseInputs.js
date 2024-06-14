import React, { useCallback, useState } from "react";

// 반복적 input을 관리하는 코드
function useInputs(initialform) {
    // useState
    const [form, setForm] = useState(initialform);
    // change
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, [])
    // form 값 초기화
    const reset = useCallback(() => setForm(initialform), [initialform])
    return [form, onChange, reset];  
}

export default useInputs
