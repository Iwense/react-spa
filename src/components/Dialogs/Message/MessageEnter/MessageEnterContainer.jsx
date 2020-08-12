import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../../redux/dialogsReducer'
import { connect } from 'react-redux'
import MessageEnter from './MessageEnter'



const mapStateToProps = (state) => {
   return {
      newMessageText: state.newMessageText,
      placeholder: 'Your message..'

   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text))
      },
      addMessageText: () => {
         dispatch(addMessageActionCreator())
      }


   }
}

const MessageEnterContainer = connect(mapStateToProps, mapDispatchToProps)(MessageEnter)

export default MessageEnterContainer