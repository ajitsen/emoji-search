import React, { PureComponent } from "react";
import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f60d.png"
          width="32"
          height="32"
          alt=""
        />
        Recipe Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f60b.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
export default Header;
