import React from 'react';
import Post from './Post/Post';



const Posts = () => {

   let posts = [
      { id: 1, message: "Hi, my first post", like_count: 2 },
      { id: 2, message: "I like bouldering", like_count: 22 },
      { id: 3, message: "Hi, i like Masha", like_count: 12 }
   ];

   let postsElements =
      posts.map(p => <Post message={p.message} like_count={p.like_count} />);

   return (

      <div className="user-post">
         <div className="user-post__enter-area" >
            <textarea placeholder="Enter your text..." className="user-post__textarea" id="post__textarea" ></textarea>
            <a className="user-post__btn-add" href="#">Send</a>
         </div>
         <div className="user-post__list" >
            {postsElements}
         </div>


      </div>

   )
}


export default Posts;