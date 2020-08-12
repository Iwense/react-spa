let initialState = {
   friends: [
      { id: 1, name: "Alexey", sex: "M", age: 23, photo: "https://static4.depositphotos.com/1000605/297/i/450/depositphotos_2975699-stock-photo-style-beauty-guy.jpg" },
      { id: 2, name: "Irina", sex: "W", age: 22, photo: "https://i.pinimg.com/736x/ba/27/8e/ba278ecba769ddbec8fffad473300e58.jpg" },
      { id: 3, name: "Masha", sex: "W", age: 24, photo: "https://i.pinimg.com/originals/a3/c9/30/a3c9301d58ef886e3ce661da0875d87e.jpg" }
   ]
}

const sidebarReducer = (state = initialState, action) => {

   return state
}

export default sidebarReducer