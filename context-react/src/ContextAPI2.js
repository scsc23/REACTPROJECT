import React, { Children, createContext, useState } from "react";

// 1. 초기 값 설정
const UserContext = createContext({
    state: {id: 'aaa', name: 'bbbb'},
    action: {setUser : () => {}}
});

// 2. Provider component 재정의
// 매개값의 이름은 반드시 children으로 구조 분해 할당
// {children}은 Provider로 전달되는 모든 Component를 의미
// useState를 이용해 데이터를 관리
const UserProvider = ({children}) => {
    const [user, setUser] = useState({id: 'aaa', name: 'bbbb'});
    const value = {
        state: user,
        action: {setUser}
    }
    console.log(UserContext);
    console.log(value)
    // Provider 반환
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );    
}

// 3. 외부에서 사용 가능하도록 consumer, provider를 
const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer};

export default UserContext;

