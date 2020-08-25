import React from 'react'

let Users = (props) => {

   return (

      props.users.map(u => <div key={u.id}>
         u.name
      </div>)
   )
}


export default Users