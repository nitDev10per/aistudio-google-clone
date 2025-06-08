import { useEffect, useRef } from "react";


const useOutSideClick = (action, dipendency=[]) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            elementRef.current &&
            !elementRef.current.contains(event.target)
          ) {
            action()
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, dipendency);

  return elementRef
}

export default useOutSideClick