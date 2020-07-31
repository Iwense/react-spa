import React from 'react';


const Message = (props) => {

   return (
      <div className="dialogs__chat-message">
         {props.message}
      </div>
   )

}

export default Message;