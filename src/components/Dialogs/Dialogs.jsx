import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageEnterContainer from './Message/MessageEnter/MessageEnterContainer';


const Dialogs = (props) => {
   let dialogsElement = props.dialogs
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

   let massagesElement = props.messages
      .map(message => <Message message={message.message} key={message.id} />);


   return (

      <div className="dialogs">
         <div className="dialogs__list">
            {dialogsElement}
         </div>
         <div className="dialogs__chat">
            {massagesElement}
            <MessageEnterContainer />
         </div>
      </div>

   )
}

export default Dialogs;