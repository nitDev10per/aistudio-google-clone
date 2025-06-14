import React from 'react'

const Card = ({className, img=false, title, desc, newF=false}) => {
  return (
    <div className={`hoz-same-item-align items-start py-2 px-4 bg-hoverC flex-1 rounded-3xl gap-4 relative ${className}`}>
        {img && <img src={img} alt="" className='h-14 w-14 rounded-md'/>}
        <div className='vtl-same-item-align items-start gap-1'>
            {title && <h5 className='text-sm'>{title}</h5>}
            {desc && <h5 className='text-sm'>{desc}</h5>}
            {newF && <p className='h-max w-max absolute top-3 right-3 z-10 text-[12px] px-1 bg-buttonC text-btnTextC rounded'>new</p>}
        </div>
    </div>
  )
}

export default Card