const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
   posts: [
      { id: 1, message: "Hi, my first post", like_count: 2 },
      { id: 2, message: "I like bouldering", like_count: 22 },
      { id: 3, message: "Hi, i like Masha", like_count: 12 }
   ],
   newPostText: '',
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_TEXT: {
         let stateCopy = { ...state }
         stateCopy.newPostText = action.newPostText
         return stateCopy
      }
      case ADD_POST: {
         let nextId = state.posts.length + 1;
         let newItem = {
            id: nextId,
            message: state.newPostText,
            like_count: 0
         }
         let stateCopy = { ...state }
         stateCopy.posts = [...state.posts]
         console.log(newItem)
         stateCopy.posts.push(newItem)
         stateCopy.newPostText = ''
         return stateCopy
      }

      default: return state
   }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_TEXT, newPostText: text })

export default profileReducer