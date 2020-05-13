import React, { useState } from "react";

const Header = (props: any) => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div>
      <div className="header">
        <div className="search">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              props.changeName(e.target.value);
            }}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="user">
          <div className="user__notifications">
            <i className="ion-android-notifications"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
