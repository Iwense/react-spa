import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

   let path = "/dialogs/" + props.id;

   return (
      <div className="dialogs__item dialogs__item--active">
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}


const Message = (props) => {

   return (
      <div className="dialogs__chat-message">
         {props.message}
      </div>
   )

}

const Dialogs = (props) => {
   return (

      <div className="dialogs">
         <div className="dialogs__list">
            <DialogItem name="Alexander" id="1" />
            <DialogItem name="Masha" id="2" />
            <DialogItem name="Petya" id="3" />
         </div>
         <div className="dialogs__chat">
            <Message message="Hi!" />
         </div>
      </div>

   )
}

export default Dialogs;