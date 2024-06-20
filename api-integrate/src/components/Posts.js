import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import useAsync from "./useAsync";
import { postsFetch, usePostsDispatch, usePostsState } from "../PostsContext";

const Post = ({id, title, userId}) => {
    return (
      <div>
        <span style={{color:'red',marginRight: 30, width:'20px'}}>{id}</span> 
        <span style={{marginRight: 30}}>{title}</span> 
        <span style={{color:"orange"}}>{userId}</span>
      </div>
    );
  };
    
    async function postsFunction() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
      }
    
    function Posts() {
  
    const state = usePostsState();
    const dispatch = usePostsDispatch();
    const {loading, posts, error} = state;
  
    useEffect( () => {
      postsFetch(dispatch);
    }, [dispatch]);
    
    const fetchdata = () => {
      postsFetch(dispatch);
    }
    
    if (error) return (
      <div>
        <h1>에 러 발 생</h1>
        <p>{error.message}</p>
      </div>
    );
  
    if (loading) return <h1>로 딩</h1>;
    if (!posts) return null;
  
    return (
      <div>
        <button onClick={fetchdata}>다시 불러오기</button>
        <hr/>
        {console.log(loading)}
        {!loading && posts.map(post => (
          <Post key={post.id} id={post.id} title={post.title} userId={post.userId} />
        ))}
      </div>
    );
  
  }
export default Posts;