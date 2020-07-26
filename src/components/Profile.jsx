import React from 'react';


const Profile = () => {
   return (
      <div className="main-content">
         <div className="user">
            <div className="user__avatar">
               <img className="user__img" src="https://www.dermosil.ru/storage/D0DCB1D3E6009494550EE62644C8044CA190B6192F38D7052A97530651105B81/aedbabfa258d417792d474acc12280fe/jpg/media/4df8db6b20f940a698a06ed4e292cdd3/Man.jpg"></img>
            </div>
            <div className="user__info">
               <p className="user__name">Alexander Grishin</p>
               <p className="user__datebirth">Date of Birth: 17.08.1996</p>
               <p className="user__phone">Phone: +7 920 083 28 24</p>
               <p className="user__city">City: Moscow, Russia</p>
               <p className="user__education">Education : Oryol Goverment State University</p>
            </div>
         </div>

         <div className="user-post">
            <div className="user-post__enter-area" > Here will be area for write</div>
            <div className="user-post__list" >Here will be posts...</div>

         </div>

      </div>
   )
}


export default Profile;