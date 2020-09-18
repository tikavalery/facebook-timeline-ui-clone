import React from 'react';

import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from './StateProvider';
// import Firebase from "./firebase"


function App() {
  const [{user},dispatch] = useStateValue();

  return (
    //BEM Naming convention
    <div className="app">
      {!user?(
      <Login/>):(
        <div> 
          <Header/>
         <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
         </div>
         </div>
      )}
      

    </div>
  );
}

export default App;
