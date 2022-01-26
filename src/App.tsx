import React from 'react';
import Landing from "./components/landing/Landing";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import { Provider } from 'react-redux'
import { store } from './store/';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
