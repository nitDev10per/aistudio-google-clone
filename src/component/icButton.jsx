import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as Icons from "lucide-react";
import icons from '../data/icons';

const IcButton = ({ icon, name, iconOnly = true, clicked = false, onClick = () => { }, className = '', tooltip = false}) => {
  const [hover, setHover] = useState(false);
  const LucideIcon = Icons[icons[icon || name]];

  const handleHover = useCallback((val) => {
    setHover(val);
  }, [])

  const translate = useMemo(()=>{
    console.log(`-translate-x-[${`${name}`.length * 10}px]`)
    switch(tooltip){
      case 'left': return `translateX(-120%)`
      case 'right': return 'translateX(30px)'
      case 'bottom': return 'translateY(50px)'
      case 'top': return '-translateY(-10px)'
    }
  },[tooltip])

  return (
    <div
      onClick={() => onClick()}
      className={`flex items-center justify-start gap-2 ${(hover || clicked) ? 'bg-hoverC' : ''} rounded-3xl px-2 py-2 h-min ${!iconOnly ? 'w-full pl-3' : 'w-min'} overflow-visible ${className} cursor-pointer relative`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {LucideIcon && <LucideIcon className={`w-4 h-4 ${hover || clicked ? 'text-white' : 'text-textC'}`} />}
      {!iconOnly && <h3 className={`text-center ${hover || clicked ? 'text-white' : 'text-textC'} text-sm font-semibold`}>{name}</h3>}
      <h6 className={` ${tooltip && hover && iconOnly? 'block': 'hidden'} text-white break-words bg-hoverC fixed z-30 rounded text-xs w-full max-w-32 min-w-16 p-1`} style={{
        transform: translate,
        transition: 'display 0.2s ease-in-out, transform 0.2s ease-in-out'
      }}>{name}</h6>
    </div>
  )
}

export default IcButton