import { useWeather } from '../context/useWeather';

const compassPoints = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

function WindMap() {
  const { weather } = useWeather();
  if (!weather) return null;

  const degrees = Math.round(weather.current.windDirection);
  const direction = Math.round(degrees / 45) % compassPoints.length;
  const directionLabel = compassPoints[direction];

  return (
    <section className="wind-panel section-panel" aria-label={`Wind from ${directionLabel}, ${degrees} degrees`}>
      <header className="wind-header">
        <h2 className="section-heading">Wind map</h2>
        <span className="section-kicker">Local direction</span>
      </header>
      <div className="wind-map" role="img" aria-label={`Wind direction ${directionLabel}, ${degrees} degrees`}>
        <div className="wind-lines" aria-hidden="true" />
        {compassPoints.map((point, index) => (
          <span className={`wind-compass-label bearing-${index}${point === directionLabel ? ' is-active' : ''}`} key={point}>
            {point}
          </span>
        ))}
        <span className="wind-arrow" style={{ transform: `translate(-50%, -50%) rotate(${weather.current.windDirection}deg)` }} aria-hidden="true">↑</span>
      </div>
      <div className="wind-reading">
        <strong>{weather.current.windSpeed} km/h</strong>
        <span>{directionLabel} · {degrees}°</span>
        <span className="wind-place">{weather.city}</span>
      </div>
    </section>
  );
}

export default WindMap;