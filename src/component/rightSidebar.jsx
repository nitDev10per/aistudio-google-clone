import React from 'react'
import IcButton from './icButton'
import { useApp } from '../contextApi/createContext';

const RightSidebar = ({ className = '', iconOnly = false }) => {
  const {isSidebarOpen, setSidebarOpen } = useApp();

  return (
    <div className={`min-w-16 w-full h-full flex flex-col justify-start gap-4 items-center ${className} `}>
      <IcButton
        icon={'Slider'}
        name={'Run Setting'}
        iconOnly={true}
        clicked={false}
        onClick={() => {
          if(isSidebarOpen==='setting'){
            setSidebarOpen(false)
          }else{
            setSidebarOpen('setting')
          }
        }}
        tooltip={'left'}
      />
      <IcButton
        icon={'Structured Output'}
        name={'Prompts Gallery'}
        iconOnly={true}
        clicked={false}
        onClick={() => {
          if(isSidebarOpen==='penal'){
            setSidebarOpen(false)
          }else{
            setSidebarOpen('penal')
          }
        }}
        tooltip={'left'}
      />
      
    </div>
  )
}

export default RightSidebar