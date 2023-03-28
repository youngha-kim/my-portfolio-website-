import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "react-toggle/style.css";
import { SetStateAction, Dispatch } from "react";
import { FunctionComponent } from "react";

interface toggleState {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}

const HamburgerMenu: FunctionComponent<toggleState> = (props : toggleState) => {
  const {isOpen, setIsOpen} = props 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 block md:hidden">
      <div>
        {isOpen ? (
          <HiX className="text-2xl text-gray-800 cursor-pointer " onClick={handleToggle} />
        ) : (
          <HiMenu className="text-2xl text-gray-800 cursor-pointer" onClick={handleToggle}/>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
