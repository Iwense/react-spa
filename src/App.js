import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className="main">

      <Header />
      <Sidebar />
      <Profile />

    </div>

  )
}


export default App;