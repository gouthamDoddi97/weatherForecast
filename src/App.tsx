import './index.css'
import './App.css'
import ContentLayout from './components/layout/contentLayout.tsx';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <ContentLayout />
    </WeatherProvider>
  )
}

export default App
