import React from 'react';
import Post from './Post/Post';



const Posts = () => {
   return (

      <div className="user-post">
         <div className="user-post__enter-area" >
            <textarea className="user-post__textarea" id="post__textarea" ></textarea>
            <a className="user-post__btn-add" href="#">Add post</a>
         </div>
         <div className="user-post__list" >
            <Post message="Hi, my first post" like_count="2" />
            <Post message="Hi, my second post" like_count="15" />
         </div>


      </div>

   )
}


export default Posts;