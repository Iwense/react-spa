import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';


const MessageEnter = (props) => {

   let newMessageAdd = React.createRef()

   const onChangeText = () => {
      let text = newMessageAdd.current.value;
      let action = updateNewMessageTextActionCreator(text)
      props.dispatch(action)
   }

   const addMessage = (e) => {
      e.preventDefault();
      let action = addMessageActionCreator()
      props.dispatch(action);
   }

   return (

      <div className="enter-area" >
         <textarea onChange={onChangeText} value={props.newMessageText} placeholder={props.placeholder} className="enter-area__textarea" ref={newMessageAdd} ></textarea>
         <a className="enter-area__btn-add" onClick={addMessage} href="#">Send</a>
      </div>


   )
}


export default MessageEnter; 