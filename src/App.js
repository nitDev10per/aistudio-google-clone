import './App.css';
import Sidebar from './component/sidebar.jsx';
import Topbar from './component/topbar.jsx';
import Home from './pages/home.jsx';

function App() {
  return (
    <div className='h-screen w-screen bg-windowC text-textC flex justify-center items-center overflow-hidden'>
      {/* left bar */}
      <div className='h-full w-full max-w-52 min-w-16 flex flex-col justify-start gap-2 p-4'>
        <h1>Google AI Studio</h1>
        <Sidebar/>
      </div>
      <div className='h-full flex-1 flex flex-col justify-start items-center'>
        {/* top bar */}
        <Topbar />
        {/* main content */}
        <div className='w-full flex-1 flex justify-center items-center overflow-hidden'>
          <Home />
          <Sidebar className='max-w-16 ' iconOnly={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
