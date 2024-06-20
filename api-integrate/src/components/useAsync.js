import { useReducer, useEffect } from "react";

// 비동기 통신 custom hook

// reducer 생성
// useState에서 상태 값을 보는 것, posts, loading, error
// 이것으로 생각할 수 있는 상태... .
// 1. LOADING -> posts값 완료X, LOADING중이면서, Error는 없는 상태
// 2. POSTS(SUCCESS) -> posts값 완료, LOADING 끝, Error 없는 상태
// 3. ERROR -> posts값 X, LOADING X, Error가 있는 상태.
function reducer(state, action) {
    switch(action.type) {
        case 'LOADING':
            return {
                loading: true,
                posts: null,
                error: null
            }
        case 'SUCCESS':
            return {
                loading: false,
                posts: action.posts,
                error: null
            }
        case 'ERROR':
            return {
                loading: false,
                posts: null,
                error: action.error
            }
        default:
            throw new Error(`Unhandled action type : ${action.type}`)
    }
  }

function useAsync(callback, deps = []) {
    // reducer 사용
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        posts: null,
        error: null
    });

    const postTest = async () => {
        dispatch({type: 'LOADING'});
        try {
            const response = await callback();
            dispatch({type: 'SUCCESS', posts: response.filter(t => t.id <= 20)});
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(() => {
        postTest();
        // eslint 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, deps)

    return [state, postTest];
}

export default useAsync;