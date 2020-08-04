import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageEnter from '../MessageEnter/MessageEnter';


const Dialogs = (props) => {


   let dialogsElement = props.state.dialogs
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let massagesElement = props.state.messages
      .map(message => <Message message={message.message} />);


   return (

      <div className="dialogs">
         <div className="dialogs__list">
            {dialogsElement}
         </div>
         <div className="dialogs__chat">
            {massagesElement}
            <MessageEnter
               dispatch={props.dispatch}
               newMessageText={props.state.newMessageText}
               placeholder="Your message.." />
         </div>
      </div>

   )
}

export default Dialogs;