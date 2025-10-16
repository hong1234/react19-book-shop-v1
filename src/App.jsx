// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
