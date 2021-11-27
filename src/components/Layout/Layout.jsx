import React from "react";
import { Countdown } from "../Countdown/Countdown";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <span>Christmas Facts App</span>
        <span className="countdown"> 
          <span>Christmas countdown: </span>
          <Countdown />
        </span>
      </header>
      <main className="app-content">{children}</main>
      <footer className="app-footer">
        <span className="copy">&copy; Markéta, Jana, Jitka</span> ❤ We wish you
        Merry Christmas, dear Czechitas! 🌲
      </footer>
    </div>
  );
};

export default Layout;
