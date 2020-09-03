import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="main">

        <Header />
        <Sidebar state={props.state.sidebar} />

        <Route path='/dialogs'
          render={() =>
            <DialogsContainer />} />

        <Route path="/profile/:userid?"
          render={() =>
            <ProfileContainer />}
        />

        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />


      </div>
    </BrowserRouter>


  )
}


export default App;
