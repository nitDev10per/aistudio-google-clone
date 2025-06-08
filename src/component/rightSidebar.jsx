import React from 'react'
import IcButton from './icButton'

const RightSidebar = ({className='', iconOnly=false}) => {
  return (
    <div className={`min-w-16 w-full h-full flex flex-col justify-start gap-4 items-center ${className} `}>
      <IcButton 
      icon={''}
      name={'Chat'}
      iconOnly={iconOnly}
      clicked={true}
      />
      <IcButton 
      icon={''}
      name={'Chat'}
      iconOnly={iconOnly}
      clicked={true}
      />
    </div>
  )
}

export default RightSidebar