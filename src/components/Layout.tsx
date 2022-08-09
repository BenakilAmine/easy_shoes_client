import React from "react";
import Navbar from "./Header/Navbar";

function Layout({ children }: { children: any }): JSX.Element {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <h1>TEST</h1>
    </div>
    
  );
}

export default Layout;
