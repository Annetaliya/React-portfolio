import Header from './Components/Header';
import './App.css';
import SideBar from './Components/SideBar';
import ProfilePic from './Components/ProfilePic';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Services from './Components/Services';
import ProgressBar from './Components/ProgressBar';

function App() {
 
  return (
    <>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          <Introduction />
          <About />
          <Services />
        </div>
        <div className='hidden md:block'>
          <ProgressBar />
          <ProfilePic />
        </div>
      </div>
    </>
  )
}

export default App
