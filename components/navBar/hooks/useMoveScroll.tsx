import { RefObject, useRef, useState } from "react";
import { NavCategories } from "../../shared/constant";
import { MouseEvent } from "react";
import { SetStateAction, Dispatch } from "react";

interface ObjectType {
  [key: string | number]: RefObject<HTMLDivElement>;
}
interface toggleState {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
}
//hook
const useMoveScroll = () => {
  const [isOpen, setIsOpen] = useState<toggleState["isOpen"]>(false);

  const element: ObjectType = {
    0: useRef<HTMLDivElement>(null),
    1: useRef<HTMLDivElement>(null),
    2: useRef<HTMLDivElement>(null),
    3: useRef<HTMLDivElement>(null),
  };

  const moveToScroll = (event: MouseEvent<HTMLButtonElement>) => {
    const text = (event.target as HTMLElement).textContent;
    for (let i = 0; i < NavCategories.length; i++) {
      if (text === NavCategories[i]) {
        element[i as keyof ObjectType].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setIsOpen(false)
      }
    }
  };
  return { element, moveToScroll, isOpen, setIsOpen };
};

export default useMoveScroll;
