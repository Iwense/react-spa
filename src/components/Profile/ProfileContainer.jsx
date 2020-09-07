import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setUsersProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

   componentDidMount() {

      this.userid = this.props.match.params.userid

      if (!this.userid) {
         this.userid = 0
      }
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.userid}`)
         .then(response => {
            this.props.setUsersProfile(response.data)
         })
   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} userid={this.userid} />
      )
   }

}

let mapStatetoProps = (state) => ({
   profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStatetoProps, { setUsersProfile })(withUrlDataContainerComponent);