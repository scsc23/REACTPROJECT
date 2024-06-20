import React, { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { useState } from 'react';
import Posts from './components/Posts';
import { PostsProvider } from './PostsContext';

function App() {

  // let [raw, setRaw] = useState();

  // 클릭 시 비동기 통신
  // const handleClick = () => {
  //   fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setRaw(data)
  //   }).catch(e => console.log(e));
  // }

  // useEffect() 사용
  // 화면 렌더링 완료 시 데이터 처리를 위해 사용
  // 이 때 비동기 작업을 component에서 바로 쓰고 state를 변경하면 무한 루프에 빠짐
  // useEffect() hook을 이용해 첫 번째 rendering 완료 시에만 data를 가져오게 처리
  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then(response => response.json())
  //   .then(data => setRaw(data))
  //   .catch(e => e.console.log(e));
  // }, []);

  // axios를 이용한 통신
  // const handleClick = () => {
  //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then(response => {
  //     console.log(response.data);
  //     setRaw(response.data);
  //   })
  // }

  // async(비동기) await(순차적)
  // 1. async 안에 await가 존재함
  // 2. function 앞에 async 키워드를 추가하고 함수는 언제나 Promise를 반환
  // 3. 반환 타입이 Promise라면 await를 적용하고 then을 없앨 수 있음

  // const handleClick = async () => {
  //   let response = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    //   .then(response => {
    //     console.log(response.data);                
    //     console.log(1);
    // });   
    // console.log(response.data)
    // setRaw(response.data)
    // console.log(1);
    // let response2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // console.log(response2.data)
    // setRaw(response2.data)
    // console.log(2);
    
    // let response3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // console.log(response3.data)
    // setRaw(response3.data)
    // console.log(3);
    
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then(response => {
    //   console.log(response.data);
    //   console.log(4);
    // })
    // console.log(5);
  // }

  return (
    <div>
      <h3>클릭 시 fetch로 데이터 가져오기</h3>
      {/* <button type='button' onClick={handleClick}>데이터 로드</button> */}
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </div>
  );
}

export default App;