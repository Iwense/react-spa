import React from 'react';

const FriendsItem = (props) => {


   return (

      <div className="friends__item">
         <img className="friends__item-img" src={props.photo} alt={props.name} />
         <p className="friends__item-name">{props.name}</p>
      </div>
   )
}


export default FriendsItem;