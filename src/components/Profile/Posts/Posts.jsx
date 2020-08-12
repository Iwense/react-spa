import React from 'react';
import Post from './Post/Post';
import EnterAreaContainer from './EnterArea/EnterAreaContainer';



const Posts = (props) => {


   let postsElements = props.posts
      .map(p => <Post message={p.message} like_count={p.like_count} key={p.id} />)


   return (

      <div className="user-post">

         <EnterAreaContainer />

         <div className="user-post__list" >
            {postsElements}
         </div>


      </div>

   )
}


export default Posts;