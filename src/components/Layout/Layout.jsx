import React from "react";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <header className="app-header">Christmas Facts App</header>
      <main className="app-content">{children}</main>
      <footer className="app-footer">
        <span className="copy">&copy; Markéta, Jana, Jitka</span> ❤ We wish
        you Merry Christmas, dear Czechitas! 🌲
      </footer>
    </div>
  );
};

export default Layout;
