import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import EnterArea from '../EnterArea/EnterArea';


const Dialogs = (props) => {


   let dialogsElement = props.state.dialogs
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let massagesElement = props.state.messages
      .map(message => <Message message={message.message} />);

   let newPostAdd = React.createRef()


   const handleClick = (e) => {
      e.preventDefault();

      let text = newPostAdd.current.value;
      alert(text);
   }

   return (

      <div className="dialogs">
         <div className="dialogs__list">
            {dialogsElement}
         </div>
         <div className="dialogs__chat">
            {massagesElement}
            <EnterArea placeholder="Your message.." />
         </div>
      </div>

   )
}

export default Dialogs;