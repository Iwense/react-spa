import React from 'react';



const EnterArea = (props) => {

   let newPostAdd = React.createRef()

   const handleClick = (e) => {
      e.preventDefault();

      let text = newPostAdd.current.value;
      alert(text);
   }

   return (

      <div className="enter-area" >
         <textarea placeholder={props.placeholder} className="enter-area__textarea" ref={newPostAdd} ></textarea>
         <a className="enter-area__btn-add" onClick={handleClick} href="#">Send</a>
      </div>


   )
}


export default EnterArea;