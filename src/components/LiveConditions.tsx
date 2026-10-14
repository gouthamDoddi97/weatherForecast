import { useEffect, useRef } from 'react';
import {
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { useWeather } from '../context/useWeather';

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
);

function LiveConditions() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { weather } = useWeather();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !weather) return;
    const hourly = weather.hourly.slice(0, 6);
    const temperatures = hourly.map((hour) => hour.temperature);

    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: hourly.map((hour) => hour.time),
        datasets: [{
          label: 'Temperature',
          data: temperatures,
          borderColor: '#42c5df',
          backgroundColor: 'rgba(66, 197, 223, 0.1)',
          borderWidth: 2,
          pointRadius: 2.5,
          pointHoverRadius: 5,
          pointBackgroundColor: '#f4f5f1',
          pointBorderColor: '#42c5df',
          fill: true,
          tension: 0.35,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ({ parsed }) => ` ${parsed.y}°C`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { color: '#a5adaa' },
          },
          y: {
            suggestedMin: Math.min(...temperatures) - 3,
            suggestedMax: Math.max(...temperatures) + 3,
            border: { display: false },
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            ticks: {
              color: '#a5adaa',
              callback: (value) => `${value}°`,
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [weather]);

  return (
    <section className="live-panel section-panel">
      <header className="live-header">
        <h2 className="section-heading">Live conditions</h2>
        <span className="live-dot" aria-label="Live data" />
      </header>
      <div className="live-chart">
        {weather ? <canvas ref={canvasRef} aria-label="Hourly temperature forecast" role="img" /> : <p className="chart-empty">Loading forecast...</p>}
      </div>
      <div className="live-metrics">
        <div><span>Humidity</span><strong>{weather?.current.humidity ?? '--'}%</strong></div>
        <div><span>Wind</span><strong>{weather?.current.windSpeed ?? '--'} km/h</strong></div>
        <div><span>Pressure</span><strong>{weather?.current.pressure ?? '--'} hPa</strong></div>
      </div>
    </section>
  );
}

export default LiveConditions;
