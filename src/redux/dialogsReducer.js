const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
   dialogs: [
      { id: 1, name: "Alexander" },
      { id: 2, name: "Valera" },
      { id: 3, name: "Masha" }
   ],
   messages: [
      { id: 1, message: "Hi,Alexander" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Its okay!" }
   ],
   newMessageText: '',
}


const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT: {
         let stateCopy = { ...state }
         stateCopy.newMessageText = action.newMessageText
         return stateCopy
      }
      case ADD_MESSAGE: {
         let nextId = state.messages.length + 1;
         let newMessage = {
            id: nextId,
            message: state.newMessageText,
         }
         let stateCopy = { ...state }
         stateCopy.messages = [...state.messages]
         stateCopy.messages.push(newMessage)
         stateCopy.newMessageText = ''
         return stateCopy
      }

      default: return state
   }

}



export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })

export default dialogsReducer