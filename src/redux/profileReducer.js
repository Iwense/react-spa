const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
   posts: [
      { id: 1, message: "Hi, my first post", like_count: 2 },
      { id: 2, message: "I like bouldering", like_count: 22 },
      { id: 3, message: "Hi, i like Masha", like_count: 12 }
   ],
   newPostText: '',
   profile: null,
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_TEXT: {
         return {
            ...state,
            newPostText: action.newPostText
         }
      }
      case ADD_POST: {
         let nextId = state.posts.length + 1;
         let newItem = {
            id: nextId,
            message: state.newPostText,
            like_count: 0
         }
         return {
            ...state,
            posts: [...state.posts, newItem],
            newPostText: ''
         }
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }

      default: return state
   }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_TEXT, newPostText: text })

export default profileReducer