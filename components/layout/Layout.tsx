import MainNavigation from "./MainNavigation";
import type { ReactNode } from "react";
type props = {
  children: ReactNode;
};
function Layout(props: props) {
  return (
    <>
      <MainNavigation>
        <main>{props.children}</main>
      </MainNavigation>
    </>
  );
}

export default Layout;
