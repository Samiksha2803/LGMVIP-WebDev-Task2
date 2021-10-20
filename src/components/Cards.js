import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      <div className="grid">
      {props.userData.map((user, index) => {
        return (
          <div class="column">
            <div class="image">
              <img src={user.avatar} alt="" className="avatar"></img>
              <h2 className="name">
                {user.first_name}
                <span>{user.last_name}</span>
              </h2>
              <p className="email">{user.email}</p>
              <p><p>User ID: {user.id}</p></p>                
            </div>
          </div>
        );
      })}
       </div>
    </>
  );
}