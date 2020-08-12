import React from 'react';


const MessageEnter = (props) => {

   let newMessageAdd = React.createRef()

   const onChangeText = () => {
      let text = newMessageAdd.current.value;
      props.updateNewMessageText(text)
   }

   const addMessage = (e) => {
      e.preventDefault();
      props.addMessageText()
   }

   return (

      <div className="enter-area" >
         <textarea onChange={onChangeText} value={props.newMessageText} placeholder={props.placeholder} className="enter-area__textarea" ref={newMessageAdd} ></textarea>
         <a className="enter-area__btn-add" onClick={addMessage} href="#">Send</a>
      </div>


   )
}


export default MessageEnter; 