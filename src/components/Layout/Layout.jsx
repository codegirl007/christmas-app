import React from "react";
import './style.css'

const Layout = ({children}) => {
  return (
    <div className="app-wrapper"> 
      <header className="app-header"> App Header</header>
      <main className="app-content">{children}</main>
      <footer className="app-footer">App footer</footer>
    </div>
  )
}

export default Layout