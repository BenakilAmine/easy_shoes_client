import React from "react";
import Footer from "./Footer";
import Navbar from "./Header/Navbar";

function Layout({ children }: { children: any }): JSX.Element {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
    
  );
}

export default Layout;
