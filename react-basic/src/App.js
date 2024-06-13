// import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useMemo, useCallback } from 'react';
// import Wrapper from './Wrapper';
import PropTypes from 'prop-types'  // prop 타입 검증 모듈
// import StateComponent from './useState/StateTest';
// import Counter from './useState/Counter';
// import MyComponent2 from './useState/MyComponent2';
// import EventComponent from './Event/EventComponent';
// import InputSample from './Event/InputSample';
// import EventComponent2 from './Event/EventComponent2';
import UserList from './array/UserList';
// import ArrayKey from './array/ArrayKey';
// import InputSample2 from './array/InputSample2';
import CreateUser from './array/CreateUser';
import HookEffect from './Hooks/HookEffect';
import LoopEffect from './Hooks/LoopEffect';
import HookRef from './Hooks/HookRef';

// active가 활성화된 사용자를 세는 함수
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중')
  return users.filter(user => user.active).length;
}

function App() {

  // const name = 'React';

  // const style = { // 카멜 표기법
  //   backgroundColor: 'red',
  //   color: 'white',
  //   fontSize: 24,
  //   padding: '1rem'
  // }

  // 배열 객체를 useState로 변경
  const [users, setUsers] = useState([
    {id: 1, username: '홍길동', email: 'hong@naver.com', active: true},
    {id: 2, username: '이순신', email: 'leeSS@naver.com', active: false},
    {id: 3, username: '유관순', email: 'You@naver.com', active: false}
]);

// useState
const [inputs, setInputs] = useState({username: '', email: ''});
const {username, email} = inputs;

const onChange = e => {
  const {name, value} = e.target;
  setInputs({
    ...inputs, 
    [name]: value
  });
}

// useRef를 이용해 component에서 사용할 변수 지정
// useRef로 관리하는 변소는 값이 바뀐다고 해서 component가 re-rendering되지 않음
// useRef로 관리하고 있는 변수는 설정 후 바로 조회 가능
// - setTimeout, setInterval을 통해 만들어진 id
// - 외부 라이브러리를 사용해 생성된 인스턴스
// - scroll 위치
const nextId = useRef(4);
const onCreate = useCallback(() => {

  const user = {
    id: nextId.current, username, email // 현재 useRef로 설정된 값 호출
  };
  setUsers([...users, user])
  
  setInputs({
    username: '',
    email: ''
  });
  
  nextId.current += 1;  // onCreate가 동작하면 useRef 현재값에 +1
}, [users, username, email]); // 함수 안에서 사용하는 상태(state), props를 지정

// 사용자 삭제
// useCallback()을 이용한 함수 재사용
const onRemove = useCallback(id => {
  // user.id가 파라미터로 전달된 id인 user만 제거하고 새로운 배열 만듦
  setUsers(users.filter(user => user.id !== id));
}, [users]);

// 사용자 수정
// useCallback()을 이용한 함수 재사용
// const onToggle = useCallback(id => {
//   setUsers(
//     users.map(user => user.id === id ? {...user, active: !user.active} : user))
// }, [users]);
// useCallback과 같은 기능을 useMemo로 구현
const onToggle = useMemo(id => id => {
  setUsers(
    users.map(user => user.id === id ? {...user, active : !user.active} : user)
  );
}, [users]);

// useMemo - users에 변화가 있는 경우에만 동작하고 input에 의한 re-rendering에는 반응하지 않음
// useMemo()의 첫 번째 parameter는 어떻게 연산할지를 정의하고 두 번째 parameter는 deps 배열(의존성 배열)을 정의
const count = useMemo(() =>countActiveUsers(users), [users]);

  return (
    <> {/* 하나의 태그로 묶여야함 */}
    {/* useState 테스트 */}
    {/* <StateComponent />
    <MyComponent2 name={'홍길동'} age={12}/> */}
    <hr />
    {/* <Counter />
    <EventComponent />
    <EventComponent2 />
    <InputSample /> */}
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <hr />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} /> {/* 등록 사용자 출력 */}
    <div>활성 사용자 수 : {count}</div>
    {/* <ArrayKey />
    <InputSample2 /> */}
    <hr />
    {/* <HookEffect /> */}
    {/* <LoopEffect /> */}
    <hr />
    {/* <HookRef /> */}
    

      {/* <Wrapper> */}
        {/* <MyComponent name={"홍길동"} age={'20'} email={"aaa@bbb.com"} isSpecial /> */}
        {/* <div className='test-box'> */}
          {/* <WelcomeClass name="Cahal" />
          <WelcomeFunction name={name} /> */}
          <br /> {/* or <br></br>*/}
        {/* </div> */}
        {/* <div style={style}>
          Hello World
        </div> */}
      {/* </Wrapper> */}
    </> 
  ); 
}

// 함수형
// function WelcomeFunction(props) {
//   console.log(props);
//   return <h1>Hello, {props.name}</h1>;
// }
// 클래스형
// class WelcomeClass extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// 화살표 함수 사용
const MyComponent = ({name, age, addr='서울시 신촌', email, isSpecial}) => {
  return (
    <>
      {isSpecial && // 삼항연산
      <div>
        첫 번째 MyComponent 입니다<br/>
        property1: {name}<br/>
        property2: {age}<br/>
        default property: {[addr, email]}, {email}<br/>
      </div>
      // null
      }
    </>
  )
}

// props 기본값 설정하기 (중요)대소문자를 구분함
// component에 props에 값을 설정하지 않은 경우 defaultProps로 기본 값을 설정
// syntax : component.defaultProps = {}
MyComponent.defaultProps = {
  // addr : '서울시 신촌',
  age : 0
}

// props 타입 검증(주의사항 대소문자를 정확하게 구분함)
// npm insstall prop-types
// 컴포넌트명.propTypes = {}
// PropType이 기대하는 값을 가지는지 여부 확인
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string.isRequired  // isRequired(반드시 상위 component에 전달)
}

export default App;

