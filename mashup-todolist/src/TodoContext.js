import React, { createContext, useContext, useReducer, useRef } from "react";

// useReducer를 사용하여 상태를 관리하는 TodoProvider
const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: 'component styling하기',
        done: true
    },
    {
        id: 3,
        text: 'context 만들어 사용하기',
        done: true
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: true
    },
    {
        id: 5,
        text: '복습하기',
        done: false
    }
];

function todoReducer(state, action) {
    // 생성, 제거, 토글(완료 여부)
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done : !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
// Create시 NextId가 필요하기 때문에 넘김
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(6);   // 기본 값 5개 존재
    return (
        <TodoStateContext.Provider value={state}> {/* state를 Context로 전달 */}
            <TodoDispatchContext.Provider value={dispatch}> {/* dispatch를 Context로 전달 */}
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>);
};

/* useContext에 직접 사용하는 대신 useContext를 사용하는 Hook 만들어 내보내기 */
// custom Hook 에러 처리
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoStateContext')
    }
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoDispatchContext')
    }
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoNextIdContext')
    }
    return useContext(TodoNextIdContext);
}