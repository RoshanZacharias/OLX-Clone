import React, {useContext,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/FirebaseContext';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Post from "./store/postContext";
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {user, setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const auth = getAuth();

  const LoginGuard = ({element})=>{
    if(user){
      //If the user is already logged in, redirect them to home page
      return <Navigate to="/"/>
    }
    return element;
  }


  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user);
    });
  });

  return (
    <div>
        <Post>

        <Routes>
        <Route exact path='/' element={<Home />} />
        </Routes>

        <Routes>
        <Route path='/signup' element={<Signup />} />
        </Routes>

        <Routes>
        <Route path='/login' element= {<LoginGuard element={<Login />}/>} />
        </Routes>

        <Routes>
        <Route path='/create' element={<Create />} />
        </Routes>

        <Routes>
        <Route path='/view' element={<View />} />
        </Routes>
        
      
        </Post>
    </div>
  );
}

export default App;
