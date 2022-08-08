import React from "react";

function Layout({ children }: { children: any }): JSX.Element {
  return (

    <div>
      <div>{children}</div>
    </div>
    
  );
}

export default Layout;
