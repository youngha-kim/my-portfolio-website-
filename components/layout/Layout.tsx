import MainNavigation from "./MainNavigation";
import type { ReactNode } from "react";
type props = {
  children: ReactNode;
};
function Layout(props: props) {
  return (
    <>
    <body >
      <div className = "bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <MainNavigation />
      </div>
      <main>{props.children}</main>
      </body>
    </>
  );
}

export default Layout;
