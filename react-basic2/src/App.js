// import logo from './logo.svg';
import './App.css';
// import Counter from './Hooks/Counter';
import CreateUser from './Hooks/CreateUser';
import UserList from './Hooks/UserList';
import { useCallback, useReducer, useRef } from 'react';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중')
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs : createUser에서 input 작업 시 사용
  inputs: {
    username: '',
    email: ''
  },
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
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs, // 초기화
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return null;
    case 'REMOVE_USER':
      return null;
    default:
      return state;

      
  }
  return state;
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const {username, email} = state.inputs;

  const nextId = useRef(4);

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  return (
    <>
      {/* <Counter /> */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} />
      <div>활성 사용자 수 : 0</div>
    </>
  );
}

export default App;