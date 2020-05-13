import React, { useState } from "react";

interface HeaderProps {
  name?: string;
  changeName(name: string): void;
}

const Header = (props: HeaderProps) => {
  const [name, setName] = useState("");

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
      </div>
    </div>
  );
};

export default Header;
