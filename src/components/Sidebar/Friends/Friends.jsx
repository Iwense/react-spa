import React from 'react';
import FriendsItem from './FriendsItem/FriendsItem';


const Friends = (props) => {


   let friendsList = props.state.friends
      .map(friend => <FriendsItem name={friend.name} photo={friend.photo} />)

   return (
      <div className="friends__wrapper">
         {friendsList}
      </div>
   )
}


export default Friends;