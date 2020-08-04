import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
   return (
      <div className="main-content">

         <ProfileInfo />
         <Posts
            state={props.state}
            dispatch={props.dispatch} />


      </div>
   )
}


export default Profile;