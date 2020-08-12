import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';


const Profile = (props) => {
   return (
      <div className="main-content">

         <ProfileInfo />
         <PostsContainer />


      </div>
   )
}


export default Profile;