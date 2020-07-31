import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

   let dialogsData = [
      { id: 1, name: "Alexander" },
      { id: 2, name: "Valera" },
      { id: 3, name: "Masha" }
   ];

   let messages = [
      { id: 1, message: "Hi,Alexander" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Its okay!" }
   ];



   let dialogsElement = dialogsData
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let massagesElement = messages
      .map(message => <Message message={message.message} />);

   return (

      <div className="dialogs">
         <div className="dialogs__list">
            {dialogsElement}
         </div>
         <div className="dialogs__chat">
            {massagesElement}
         </div>
      </div>

   )
}

export default Dialogs;