import './App.css';
// import Counter from './Hooks/Counter';
import CreateUser from './Hooks/CreateUser';
import useInputs from './Hooks/UseInputs';
import UserList from './Hooks/UserList';
import { useCallback, useMemo, useReducer, useRef } from 'react';
import styled from './css/App.module.css'; // css 모듈 디자인

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중')
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs : createUser에서 input 작업 시 사용
  // inputs: {        // useInputs로 대체
  //   username: '',
  //   email: ''
  // },
  users: [
    {id: 1, username: '홍길동', email: 'hong@naver.com', active: true},
    {id: 2, username: '이순신', email: 'leeSS@naver.com', active: false},
    {id: 3, username: '유관순', email: 'You@naver.com', active: false}
  ]
}

// reducer 함수
function reducer(state, action) {
  // action에 따른 state 값 변화 로직 구현
  switch(action.type) {
    // case 'CHANGE_INPUT':   // useInputs로 대체
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs, // 초기화
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active} : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;

      
  }
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  // const {username, email} = state.inputs;    // useInputs 사용으로 대체
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: ''
  })

  const nextId = useRef(4);

  // const onChange = useCallback(e => {
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <>
      <section className={styled.app_wrap}>
        <p className='title'>CSS 모듈 디자인</p>
      </section>      
      <br />
      <hr />
      {/* <Counter /> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;