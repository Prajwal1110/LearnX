import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./compnents/Home/Home";
import Header from './compnents/Layout/Header/Header';


function App() {
  return (
   <Router>

    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
   </Router>
  );
}

export default App;
