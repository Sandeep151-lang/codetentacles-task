
import './App.css';
import Login from './components/login/Login';
import Register from "./components/register/Register"
import Timer from "./components/Timer/Timer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import AppContext from './components/context/AppContext'
import LoginContext from './components/context/Context'
import Private from './components/privateRoute/Private';


function App() {
  const value = AppContext()
  return (
    <div className="App">
    <LoginContext.Provider value={value}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/user" element={ <Private/>}>
            <Route path='timer' element={<Timer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
