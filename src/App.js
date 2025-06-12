import { useEffect, useRef, useState } from 'react';
import './App.css';
import IcButton from './component/icButton.jsx';
import Sidebar from './component/sidebar.jsx';
import Topbar from './component/topbar.jsx';
import Home from './pages/home.jsx';
import useWindowWidth from './hooks/useWindowWirth.js';
import useOutSideClick from './hooks/useOutSideClick.js';
import RightSidebar from './component/rightSidebar.jsx';
import Dashboard from './pages/dashboard.jsx';
import Logo from './component/logo.jsx';
import { useApp } from './contextApi/createContext.js';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentPage, setCurrentPage } = useApp();
  const width = useWindowWidth();
  const elementRef = useOutSideClick(() => {
    if (
      width <= 768 &&
      menuOpen
    ) {
      setMenuOpen(false);
      setOpenSidebar(false);
    }
  },[menuOpen, width])

  useEffect(() => {
    if (width <= 768) {
      console.log("Mobile view");
      setOpenSidebar(false);
      // close sidebar, adjust UI, etc.
    } else {
      console.log("Desktop view");
      setMenuOpen(false);
      setOpenSidebar(true);
      // open sidebar, adjust UI, etc.
    }
  }, [width]);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
    setOpenSidebar(true);
  }

  const handleSidebarToggle = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <div className='h-screen w-screen bg-windowC text-textC flex justify-center items-center overflow-hidden relative'>
      {/* left bar */}
      <div ref={elementRef} 
      className={!menuOpen ? `h-full ${openSidebar ? 'w-full max769:min-w-0 max769:w-0' : 'w-0 max769:min-w-0 max769:w-0'} max-w-52 min-w-16 flex flex-col justify-start gap-2 relative ${openSidebar ? 'p-4 max769:p-0' : 'p-0'} onResponsiveLeftSift overflow-y-auto overflow-x-hidden` : 'h-full w-full max-w-52 flex flex-col justify-start gap-2 absolute left-0 top-0 z-10 bg-windowC p-4 overflow-y-auto overflow-x-hidden'}>
        <div className='h-16 w-full flex items-center justify-center '>
          {openSidebar? <h1 className='text-buttonC text-xl font-medium'>Google AI Studio</h1>: <Logo/>}
        </div>
        <Sidebar iconOnly={openSidebar ? false : true} />
        <div className='h-min w-min bg-cardC rounded-3xl absolute bottom-10 right-0 translate-x-[50%] z-10 max769:hidden'>
          <IcButton className='mr-4' onClick={handleSidebarToggle} name={!openSidebar ? 'arrowR' : 'arrowL'} clicked={false}/>
        </div>
       {width <= 769 && <IcButton
          icon={'/assets/icons/plus.svg'}
          name={'user@...'}
          iconOnly={false}
          clicked={false}
          className='hover:bg-transparent'
        />}
      </div>
      <div className='h-full flex-1 w-full flex flex-col justify-start items-center'>
        {/* top bar */}
        <Topbar onMenuClick={handleMenuClick} />
        {/* main content */}
        <div className='w-full h-full flex-1 flex justify-center items-center relative overflow-hidden'>
          {currentPage==='studio'? <Home openSidebar={openSidebar}/> : <Dashboard/>}
          <RightSidebar className='max-w-16 onResponsiveRightSift' iconOnly={true} />

        </div>
      </div>
    </div>
  );
}

export default App;
