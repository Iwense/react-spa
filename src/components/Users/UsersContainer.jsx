import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, setFollowFetching } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { userAPI } from '../Api/api'



class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      userAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      userAPI.getUsers(pageNumber, this.props.pageSize)
         .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
         })
   }

   followHandler = (id) => {
      this.props.setFollowFetching(true, id)
      userAPI.follow(id)
         .then(response => {
            this.props.follow(id)
            this.props.setFollowFetching(false, id)
         })

   }

   unfollowHandler = (id) => {
      this.props.setFollowFetching(true, id)
      userAPI.unfollow(id)
         .then(response => {
            this.props.unfollow(id)
            this.props.setFollowFetching(false, id)
         })

   }

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> :
               <Users
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  users={this.props.users}
                  unfollow={this.unfollowHandler}
                  follow={this.followHandler}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  FollowFetching={this.props.FollowFetching}
               />}
         </>
      )
   }
}


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      pageSize: state.usersPage.pageSize,
      isFetching: state.usersPage.isFetching,
      FollowFetching: state.usersPage.FollowFetching
   }
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId))
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (currentPage) => {
//          dispatch(setCurrentPageAC(currentPage))
//       },
//       setTotalUsersCount: (totalUsersCount) => {
//          dispatch(setTotalUsersCountAC(totalUsersCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       },


//    }
// }

const DispatchToProps = {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   setFollowFetching,
}

export default connect(mapStateToProps, DispatchToProps)(UsersContainer)

