import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
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
        <Sidebar state={props.state.sidebar} />

        <Route path='/dialogs'
          render={() =>
            <Dialogs state={props.state.dialogsPage} />} />

        <Route path="/profile"
          render={() =>
            <Profile state={props.state.profilePage} />} />

        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />


      </div>
    </BrowserRouter>


  )
}


export default App;
