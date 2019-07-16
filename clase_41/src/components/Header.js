import React from "react";

function Header(props) {
  return(
    <header className={props.className}>
      {props.message}
    </header>
  )
}

export default Header;
