import { connect } from 'react-redux'
import Posts from './Posts'



const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,

   }
}

const mapDispatchToProps = (dispatch) => {
   return {

   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer