import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profileReducer'
import { connect } from 'react-redux'
import EnterArea from './EnterArea'



const mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.newPostText,
      placeholder: 'Enter your text...'

   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text))
      },
      addPostText: () => {
         dispatch(addPostActionCreator())
      }


   }
}

const EnterAreaContainer = connect(mapStateToProps, mapDispatchToProps)(EnterArea)

export default EnterAreaContainer