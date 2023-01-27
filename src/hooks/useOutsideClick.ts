import {RefObject, useEffect} from "react";

function useOutsideClick(ref: RefObject<HTMLElement>, callback: (event: MouseEvent) => void) {

  const handleClick = (event: MouseEvent) => {
    if(ref.current?.contains(event.target as Node)) return;
    callback(event);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    }
  }, []);
}

export default useOutsideClick;

