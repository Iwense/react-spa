import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from './../../redux/profileReducer';


const EnterArea = (props) => {

   let newPostAdd = React.createRef()

   const onChangeText = () => {
      let text = newPostAdd.current.value;
      let action = updateNewPostTextActionCreator(text)
      props.dispatch(action)
   }

   const addPost = (e) => {
      e.preventDefault();
      let action = addPostActionCreator()
      props.dispatch(action);
   }

   return (

      <div className="enter-area" >
         <textarea onChange={onChangeText} value={props.newPostText} placeholder={props.placeholder} className="enter-area__textarea" ref={newPostAdd} ></textarea>
         <a className="enter-area__btn-add" onClick={addPost} href="#">Send</a>
      </div>


   )
}


export default EnterArea; 