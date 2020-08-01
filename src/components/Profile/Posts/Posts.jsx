import React from 'react';
import Post from './Post/Post';
import EnterArea from '../../EnterArea/EnterArea';



const Posts = (props) => {


   let postsElements = props.state.posts
      .map(p => <Post message={p.message} like_count={p.like_count} />)


   return (

      <div className="user-post">

         <EnterArea placeholder="Enter your text..." />

         <div className="user-post__list" >
            {postsElements}
         </div>


      </div>

   )
}


export default Posts;