// import MainNavigation from "../navBar/MainNavigation";
import type { ReactNode } from "react";
type props = {
  children: ReactNode;
};
function Layout(props: props) {
  return (
    <>
      <main>
        {props.children}
      </main>
    </>
  );
}

export default Layout;
