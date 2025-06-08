import React, { use } from 'react'
import IcButton from './icButton'
import { useApp } from '../contextApi/createContext';
import useWindowWidth from '../hooks/useWindowWirth';

const Topbar = ({ onMenuClick, setStudio }) => {
  const {isSidebarOpen, setSidebarOpen } = useApp();
  const width = useWindowWidth();

  return (
    <div className='w-full h-16 hoz-diff-item-align px-[14px] py-2'>
      <IcButton icon={'/assets/icons/plus.svg'}
        name={'New chat'}
        iconOnly={true}
        clicked={true}
        className='max769:visible invisible'
        onClick={onMenuClick}
      />
      <div className='hoz-same-item-align'>
        {width > 768 && <IcButton
          icon={'/assets/icons/plus.svg'}
          name={'Get Api Key'}
          iconOnly={false}
          clicked={true}
          onClick={() => {
            if (isSidebarOpen === 'setting') {
              setSidebarOpen(false)
            } else {
              setSidebarOpen('setting')
            }
          }}
          className='w-max'
        />}
        {width > 768 && <button onClick={()=>{setStudio(true)}}>Studio</button>}
        {width > 768 && <button onClick={()=>{setStudio(false)}}>Dashboard</button>}
        {width > 768 && <button>Documentation</button>}
        {width <= 768 && <IcButton
          icon={'/assets/icons/plus.svg'}
          name={'New chat'}
          iconOnly={true}
          clicked={true}
          onClick={() => {
            // setSidebarOpen(prev=>!prev)
          }}
        />}
        {width <= 768 && <IcButton
          icon={'/assets/icons/plus.svg'}
          name={'New chat'}
          iconOnly={true}
          clicked={true}
          onClick={() => {
            if (isSidebarOpen === 'setting') {
              setSidebarOpen(false)
            } else {
              setSidebarOpen('setting')
            }
          }}
        />}
        <IcButton
          icon={'/assets/icons/plus.svg'}
          name={'New chat'}
          iconOnly={true}
          clicked={true}
          onClick={() => {
            // setSidebarOpen(prev=>!prev)
          }}
        />
        {width > 768 && <IcButton
          icon={'/assets/icons/plus.svg'}
          name={'New chat'}
          iconOnly={true}
          clicked={true}
          onClick={() => {
            // setSidebarOpen(prev=>!prev)
          }}
        />}
      </div>
    </div>
  )
}

export default Topbar