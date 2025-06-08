import React from 'react'
import IcButton from './icButton'
import { useApp } from '../contextApi/createContext';

const Topbar = ({onMenuClick}) => {
  const { isSidebarOpen ,setSidebarOpen } = useApp();

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
                <IcButton 
                  icon={'/assets/icons/plus.svg'}
                  name={'Get Api Key'}
                  iconOnly={false}
                  clicked={true}
                  onClick={() => {
                    setSidebarOpen(prev=>!prev)
                  }}
                  className='w-max'
                />
                <button>Studio</button>
                <button>Dashboard</button>
                <button>Documentation</button>
                <IcButton 
                  icon={'/assets/icons/plus.svg'}
                  name={'New chat'}
                  iconOnly={true}
                  clicked={true}
                  onClick={() => {
                    setSidebarOpen(prev=>!prev)
                  }}
                />
                <IcButton 
                  icon={'/assets/icons/plus.svg'}
                  name={'New chat'}
                  iconOnly={true}
                  clicked={true}
                  onClick={() => {
                    setSidebarOpen(prev=>!prev)
                  }}
                />
                 <IcButton 
                  icon={'/assets/icons/plus.svg'}
                  name={'New chat'}
                  iconOnly={true}
                  clicked={true}
                  onClick={() => {
                    setSidebarOpen(prev=>!prev)
                  }}
                />
              </div>
            </div>
  )
}

export default Topbar