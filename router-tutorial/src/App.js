import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';
import Header from './components/Header';
import MyPage from './components/MyPage';

function App() {

  const {pathname} = useLocation();

  return (
    <>     
      <Header />
      <Routes>
        <Route path='/*' element={  // V5에서 Switch 사용 시 이 경로를 마지막에 작성
          <div>
            <h1>HTTP 404</h1>
            <h2>{pathname} 페이지 같은건 없음</h2>
          </div>
        } />
        <Route path='/' Component={Home} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:username' element={<User />} />
        <Route path='/info/:num' element={<Info />} />
        <Route path='/board' element={<Board />}>
          <Route path=':num' element={<BoardContent />} />
        </Route>
        {/* <Route path='/profiles' element={<Profiles />}>
          <Route path=':username' element={<User />} />
        </Route> */}
        <Route path='/profiles/*' element={<Profiles />} />
      </Routes>
    </>
  );
}

export default App;
