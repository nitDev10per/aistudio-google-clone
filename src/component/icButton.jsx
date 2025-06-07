import { useCallback, useState } from 'react'

const IcButton = ({icon, name, iconOnly=true, clicked=false}) => {
  const [hover, setHover] = useState(false);

  const handleHover = useCallback((val) => {
    setHover(val);
  },[])
  return (
    <div 
    className={`flex items-center justify-start gap-2 ${(hover || clicked)? 'bg-hoverC' : ''} rounded-3xl px-2 py-2 h-min ${!iconOnly? 'w-full pl-3' : 'w-min'} overflow-x-hidden`}
    onMouseEnter={()=>handleHover(true)}
    onMouseLeave={()=>handleHover(false)}
    >
      <imag
        src={icon}
        alt='icButton'
        className='w-5 h-5'
        />
        {!iconOnly && <h3 className={`text-center ${hover || clicked? 'text-white' : 'text-textC'} text-sm font-semibold`}>{name}</h3>}
    </div>
  )
}

export default IcButton