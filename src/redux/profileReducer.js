const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

   switch (action.type) {
      case UPDATE_NEW_TEXT: {
         state.newPostText = action.newText
         break
      }
      case ADD_POST: {
         let nextId = state.posts.length + 1;
         let newItem = {
            id: nextId,
            message: state.newPostText,
            like_count: 0
         }

         state.posts.push(newItem)
         state.newPostText = ''
         break
      }

      default: return state
   }

   return state
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_TEXT, newText: text })

export default profileReducer