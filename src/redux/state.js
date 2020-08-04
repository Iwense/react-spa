const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hi, my first post", like_count: 2 },
            { id: 2, message: "I like bouldering", like_count: 22 },
            { id: 3, message: "Hi, i like Masha", like_count: 12 }
         ],
         newPostText: '',
      },
      dialogsPage: {
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
      },
      sidebar: {
         friends: [
            { id: 1, name: "Alexey", sex: "M", age: 23, photo: "https://static4.depositphotos.com/1000605/297/i/450/depositphotos_2975699-stock-photo-style-beauty-guy.jpg" },
            { id: 2, name: "Irina", sex: "W", age: 22, photo: "https://i.pinimg.com/736x/ba/27/8e/ba278ecba769ddbec8fffad473300e58.jpg" },
            { id: 3, name: "Masha", sex: "W", age: 24, photo: "https://i.pinimg.com/originals/a3/c9/30/a3c9301d58ef886e3ce661da0875d87e.jpg" }
         ]
      }

   },
   getState() {
      return this._state
   },
   _callSubscriber() {
      console.log("state changed");
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },
   // _addPost() {
   //    let nextId = this._state.profilePage.posts.length + 1;
   //    let newItem = {
   //       id: nextId,
   //       message: this._state.profilePage.newPostText,
   //       like_count: 0
   //    }

   //    this._state.profilePage.posts.push(newItem);
   //    this._state.profilePage.newPostText = "";
   //    this._callSubscriber(this._state);
   // },
   // _updateNewPostText(newText) {
   //    this._state.profilePage.newPostText = newText
   //    this._callSubscriber(this._state)
   // },
   dispatch(action) {
      switch (action.type) {
         case UPDATE_NEW_TEXT: {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
            break
         }
         case UPDATE_NEW_MESSAGE_TEXT: {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
            break
         }
         case ADD_POST: {
            let nextId = this._state.profilePage.posts.length + 1;
            let newItem = {
               id: nextId,
               message: this._state.profilePage.newPostText,
               like_count: 0
            }

            this._state.profilePage.posts.push(newItem)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
            break
         }
         case ADD_MESSAGE: {
            let nextId = this._state.dialogsPage.messages.length + 1;
            let newMessage = {
               id: nextId,
               message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
            break
         }

         default: console.log('Unpredictable value');
      }

   }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_TEXT, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;