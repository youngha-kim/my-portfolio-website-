import { RefObject, useRef } from "react";
import { NavCategories } from "../../shared/constant";
import { MouseEvent } from "react";

interface ObjectType {
  [key: string | number]: RefObject<HTMLDivElement>;
}

//hook
const useMoveScroll = () => {
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
      }
    }
  };
  return { element, moveToScroll };
};

export default useMoveScroll;
