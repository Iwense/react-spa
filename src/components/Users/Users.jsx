import React from 'react'



const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   let html = props.users.map(u => <div key={u.id} className="user-friend">
      <div className="user-friend__item">

         <div className="user-friend__image"><img className="user-friend__img" src={u.photo} alt={u.name} /></div>
         {u.followed ?
            <button className="user-friend__btn" onClick={() => { props.unfollow(u.id) }} > Unfollow </button>
            : <button className="user-friend__btn" onClick={() => { props.follow(u.id) }} > Follow </button>
         }
      </div>

      <div className="user-friend__info">

         <div className="user-friend__info-main">
            <div className="user-friend__name">{u.name} {"u.surname"}</div>
            <div className="user-friend__status">{u.status}</div>
         </div>

         <div className="user-friend__info-submain">
            <div className="user-friend__contry">{"u.location.country"}</div>
            <div className="user-friend__city">{"u.location.city"}</div>
         </div>

      </div>

   </div>
   )

   return (
      <div className="users-list">

         {html}

         <div className="user-list__pagination" >
            {pages.map(p => {
               return p === props.currentPage
                  ? <span key={p} className="user-list__pagination-page user-list__pagination-page--selected">{p}</span>
                  : <span key={p} className="user-list__pagination-page" onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
         </div>
      </div>
   )
}

export default Users