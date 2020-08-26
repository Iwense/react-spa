const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
   users: [
      { id: 1, name: "Alexander", surname: "Pavlov", status: "He-he", location: { country: "Russia", city: "Moscow" }, photo: "https://static4.depositphotos.com/1000605/297/i/450/depositphotos_2975699-stock-photo-style-beauty-guy.jpg", followed: false },
      { id: 2, name: "Maria", surname: "Kudelko", status: "wow i am here", location: { country: "Russia", city: "Moscow" }, photo: "https://i.pinimg.com/originals/a3/c9/30/a3c9301d58ef886e3ce661da0875d87e.jpg", followed: true },
      { id: 3, name: "Ivan", surname: "Komarov", status: "lets talk", location: { country: "Russia", city: "Orel" }, photo: "https://static4.depositphotos.com/1000605/297/i/450/depositphotos_2975699-stock-photo-style-beauty-guy.jpg", followed: false },
   ],
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId)
                  return { ...u, followed: true }
               return u
            })
         }
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId)
                  return { ...u, followed: false }
               return u
            })
         }
      }
      case SET_USERS: {
         return { ...state, users: [...state.users, ...action.users] }
      }
      default: return state
   }

}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer