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
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true })
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
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true })
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
         })
   }

   followHandler = (id) => {
      axios
         .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, { withCredentials: true, headers: { "API-KEY": '16ce2d84-6245-4b19-a529-cd15039660d9' } })
         .then(response => {
            this.props.follow(id)
         })

   }

   unfollowHandler = (id) => {
      axios
         .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { withCredentials: true, headers: { "API-KEY": '16ce2d84-6245-4b19-a529-cd15039660d9' } })
         .then(response => {
            this.props.unfollow(id)
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

