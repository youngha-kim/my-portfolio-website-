// import MainNavigation from "../navBar/MainNavigation";
import type { ReactNode } from "react";
type props = {
  children: ReactNode;
};
function Layout(props: props) {
  return <>{props.children}</>;
}

export default Layout;
