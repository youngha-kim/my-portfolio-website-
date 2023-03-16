import MainNavigation from "./MainNavigation";
import type { ReactNode } from "react";
type props = {
  children: ReactNode;
};
function Layout(props: props) {
  return (
    <>
      <div className = "relative bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <MainNavigation />
      </div>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
