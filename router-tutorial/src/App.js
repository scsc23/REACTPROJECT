import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';
import Header from './components/Header';
import MyPage from './components/MyPage';

function App() {
  return (
    <>     
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
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
