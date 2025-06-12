import { useCallback, useState } from 'react'
import * as Icons from "lucide-react";
import icons from '../data/icons';

const IcButton = ({ icon, name, iconOnly = true, clicked = false, onClick = () => { }, className = '' }) => {
  const [hover, setHover] = useState(false);
  const LucideIcon = Icons[icons[icon || name]];;

  const handleHover = useCallback((val) => {
    setHover(val);
  }, [])
  return (
    <div
      onClick={() => onClick()}
      className={`flex items-center justify-start gap-2 ${(hover || clicked) ? 'bg-hoverC' : ''} rounded-3xl px-2 py-2 h-min ${!iconOnly ? 'w-full pl-3' : 'w-min'} overflow-hidden ${className} cursor-pointer`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {LucideIcon && <LucideIcon className={`w-4 h-4 ${hover || clicked ? 'text-white' : 'text-textC'}`} />}
      {!iconOnly && <h3 className={`text-center ${hover || clicked ? 'text-white' : 'text-textC'} text-sm font-semibold`}>{name}</h3>}
    </div>
  )
}

export default IcButton