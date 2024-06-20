import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const initialState = {state: {loading: false, data: null, error: null}};

function postsReducer(state, action) {
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

// 3. Context API생성
const PostsStateContext = createContext(null);
const PostsDispatchContext = createContext(null);

// 4. provider 생설 및 설정
export function PostsProvider({children}) {
    const [state, dispatch] = useReducer(postsReducer, initialState);
    return (
      <PostsStateContext.Provider value={state}>
        <PostsDispatchContext.Provider value={dispatch}>
          {children}
        </PostsDispatchContext.Provider>
      </PostsStateContext.Provider>
    );
  }
  
// 5. useContext사용하여 불러오기
export function usePostsState() {
    const state = useContext(PostsStateContext);
    if (!state) {
        throw new Error('포스트 프로바이더를 찾을 수 없음')
    }
    return state;
}

export function usePostsDispatch() {
    const dispatch = useContext(PostsDispatchContext);
    if (!dispatch) {
        throw new Error('포스트 프로바이더를 찾을 수 없음')
    }
    return dispatch;
}

export async function postsFetch (dispatch){
    dispatch({type:'LOADING'});
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log('axios');
      // console.log(response);
      dispatch({type:'SUCCESS', posts: response.data.filter(t => t.id <= 20) });
    }catch(e) {
      dispatch({type:'ERROR', error:e});
    }
  };