import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="main">

        <Header />
        <Sidebar />
        <Route path='/dialogs' component={Dialogs} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />


      </div>
    </BrowserRouter>


  )
}


export default App;
