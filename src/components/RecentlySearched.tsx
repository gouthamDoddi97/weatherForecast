import { useWeather } from '../context/useWeather';
import { WeatherConditionIcons } from '../data/enums';

function RecentlySearched() {
  const { recentLocations, searchLocation } = useWeather();
  return (
    <div className="recent-panel section-panel">
      <header className="recent-header">
        <h2 className="section-heading">Recently searched</h2>
        <span className="recent-see-all">{recentLocations.length} {recentLocations.length === 1 ? 'place' : 'places'}</span>
      </header>
      <div className="recent-list">
        {recentLocations.length ? recentLocations.slice(0, 3).map((location) => (
          <button key={location.city} className="recent-place" onClick={() => void searchLocation(location.city)}>
            <span className="recent-weather-icon" aria-hidden="true">{WeatherConditionIcons[location.condition]}</span>
            <span className="recent-place-copy"><strong>{location.city}{location.region ? `, ${location.region}` : ''}</strong><small>{location.country}</small></span>
            <span className="recent-temp">{location.temperature}°</span>
          </button>
        )) : <p className="recent-empty">Searched cities will appear here.</p>}
      </div>
    </div>
  )
}

export default RecentlySearched
