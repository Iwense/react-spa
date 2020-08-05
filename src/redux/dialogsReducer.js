const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT: {
         state.newMessageText = action.newText
         break
      }
      case ADD_MESSAGE: {
         let nextId = state.messages.length + 1;
         let newMessage = {
            id: nextId,
            message: state.newMessageText,
         }
         state.messages.push(newMessage)
         state.newMessageText = ''
         break
      }

      default: return state
   }

   return state
}



export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer