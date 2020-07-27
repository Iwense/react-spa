import React from 'react';


const Post = (props) => {
   return (

      <div className="user-post__list-item" >
         <img className="user-post__avatar" src="https://www.dermosil.ru/storage/D0DCB1D3E6009494550EE62644C8044CA190B6192F38D7052A97530651105B81/aedbabfa258d417792d474acc12280fe/jpg/media/4df8db6b20f940a698a06ed4e292cdd3/Man.jpg" alt="user-avatar" />
         <p className="user-post__text">
            {props.message}
         </p>
         <span className="user-post__mark">Like - {props.like_count}</span>
      </div>



   )
}


export default Post;