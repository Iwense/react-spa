import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';


const Profile = (props) => {
   return (
      <div className="main-content">

         <ProfileInfo profile={props.profile} userid={props.userid} />
         <PostsContainer />


      </div>
   )
}


export default Profile;