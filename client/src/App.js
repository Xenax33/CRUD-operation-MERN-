import logo from './logo.svg';
import './App.css';
import Login from './Components/LogIn';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/global.css';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './Components/Table';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element={<Login/>}/>
      <Route exact path = "/SignUp" element={<SignUp/>}/>
      <Route exact path = "/Table" element={<Table/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
