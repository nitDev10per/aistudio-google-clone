import React from 'react'
import IcButton from './icButton'

const Sidebar = ({className='', iconOnly=false}) => {
  return (
    <div className={`min-w-16 w-full h-full flex flex-col justify-between items-center ${className}`}>
      <IcButton 
      icon={''}
      name={'Chat'}
      iconOnly={iconOnly}
      clicked={true}
      />
    </div>
  )
}

export default Sidebar