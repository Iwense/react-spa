import React from 'react';


const EnterArea = (props) => {

   let newPostAdd = React.createRef()

   const onChangeText = () => {
      let text = newPostAdd.current.value;
      props.updateNewPostText(text)
   }

   const addPost = (e) => {
      e.preventDefault();
      props.addPostText();
   }

   return (

      <div className="enter-area" >
         <textarea onChange={onChangeText} value={props.newPostText} placeholder={props.placeholder} className="enter-area__textarea" ref={newPostAdd} ></textarea>
         <a className="enter-area__btn-add" onClick={addPost} href="#">Send</a>
      </div>


   )
}


export default EnterArea; 