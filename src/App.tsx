import './index.css'
import HomeLayout from './components/layout/homeLayout'
import Navbar from './components/navbar.tsx'
import { navItems } from './data/navbar'
import ContentLayout from './components/layout/contentLayout.tsx';

function App() {
  return (
    <div>
      <HomeLayout Nav={<Navbar navItems={navItems} />} Body={<ContentLayout />} />
    </div>
  )
}

export default App
