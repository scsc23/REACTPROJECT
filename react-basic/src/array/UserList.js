import React from "react";
import { useEffect } from "react";

// User component
const User = React.memo(
function User({user, onRemove, onToggle}) {

    /*
        ## mount 시 하는 작업들 
        1. props로 받은 값을 component의 local 상태로 설정
        2. 외부 API 요청(REACT API 등) 
        3. library 사용(D3, Video.js 등)
        4. setInterval을 통한 반복 작업 혹은 setTimeout을 통한 작업 예약

        ## unmount 시 하는 작업들
        1. setInterval, setTimeout을 사용하여 등록한 작업들 clear하기(clearInterval, clearTimeout)
        2. library instance 제거

        useEffect(() => {
        console.log('component가 화면에 나타남');
        return () => {  // 함수 종료 시
            console.log('component가 화면에서 사라짐')
            }
        }, [])
    */

    /* 
        ## 의존성 배열에 특정 값 넣기 
            component가 처음 mount 될 때 호출되고 지정한 값(의존성 값)이 바뀔 때마다 호출됨
            의존성 배열에 특정 값이 있으면 unmount시에도 호출, 값이 바뀌기 직전에도 호출
    */
    // useEffect(() => {
    //     console.log('user값 설정');
    //     console.log(user)
    //     return () => {
    //         console.log('user가 바뀌기 전')
    //         console.log(user)
    //     }
    // }, [user]);
    /*
        만약 useEffect() 안에서 사용하는 상태(state), props가 있다면 useEffect()의 deps(의존성 배열)에 넣어줘야함
        넣지 않을 시 useEffect에 등록된 함수가 실행될 때 최신 props 또는 상태를 가리키지 못함
    */
   /*
        의존성 배열을 생략하는 경우, 인자값을 삭제하는 경우 re-rendering시 마다 호출됨
   */
    return (
        <div>
            <b style={{cursor: "pointer", color: user.active ? "#fc2020" : 'black'}} onClick={() => onToggle(user.id)}>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>            
    )
})

function UserList({users, onRemove, onToggle}) {
    // const users = [
    //     {id: 1, username: '홍길동', email: 'hong@naver.com'},
    //     {id: 2, username: '이순신', email: 'leeSS@naver.com'},
    //     {id: 3, username: '유관순', email: 'You@naver.com'}
    // ];

    return (
        <div>
            {/* array.map() 함수를 이용한 component 반복 */}
            {users.map(user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />))}
            {/* {users.map((user, index) => (<User user={user} key={index} />))} index를 포함한 문법 */}
        </div>
    );
}

export default React.memo(UserList);