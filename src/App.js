import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage';
import Toolbar from './components/Toolbar';
import RegisterPage from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path={'/'} element={<IndexPage />}/>
          <Route path={'/register'} element={<RegisterPage />}/>
          <Route path={'/login'} element={<LoginPage />}/>
          <Route path={'/userprofile'} element={<UserProfilePage />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
