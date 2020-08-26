import React from 'react'

let Users = (props) => {
   const html = props.users.map(u => <div key={u.id} className="user-friend">
      <div className="user-friend__item">

         <div className="user-friend__image"><img className="user-friend__img" src={u.photo} /></div>
         {u.followed ?
            <button className="user-friend__btn" onClick={() => { props.unfollow(u.id) }} > Unfollow </button>
            : <button className="user-friend__btn" onClick={() => { props.follow(u.id) }} > Follow </button>
         }
      </div>

      <div className="user-friend__info">

         <div className="user-friend__info-main">
            <div className="user-friend__name">{u.name} {u.surname}</div>
            <div className="user-friend__status">{u.status}</div>
         </div>

         <div className="user-friend__info-submain">
            <div className="user-friend__contry">{u.location.country}</div>
            <div className="user-friend__city">{u.location.city}</div>
         </div>

      </div>

   </div>
   )
   return (
      <div className="users-list">
         {html}

      </div>
   )
}


export default Users