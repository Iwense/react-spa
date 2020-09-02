import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../Common/Preloader/Preloader'



class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
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
}

export default connect(mapStateToProps, DispatchToProps)(UsersContainer)

