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
import { BiArrowFromRight } from 'react-icons/bi';

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
);

const forecast = {
  labels: ['Now', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'],
  temperatures: [20, 20, 19, 18, 16, 15],
};

function LiveConditions() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: forecast.labels,
        datasets: [{
          label: 'Temperature',
          data: forecast.temperatures,
          borderColor: '#117c83',
          backgroundColor: 'rgba(17, 124, 131, 0.12)',
          borderWidth: 2.5,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: '#117c83',
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
            ticks: { color: '#64748b' },
          },
          y: {
            suggestedMin: 12,
            suggestedMax: 22,
            border: { display: false },
            grid: { color: 'rgba(100, 116, 139, 0.15)' },
            ticks: {
              color: '#64748b',
              callback: (value) => `${value}°`,
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <section className="flex h-full w-full min-h-0 flex-col gap-3 p-4">
      <header className="relative flex items-center justify-between border-b border-gray-200 pb-2">
        <h2 className="text-base font-semibold">Live Conditions</h2>
        <BiArrowFromRight className="absolute right-4 top-4 text-lg text-gray-400" />
      </header>
      <div className="relative min-h-0 flex-1">
        <canvas ref={canvasRef} aria-label="Hourly temperature forecast" role="img" />
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Humidity: {}%</span>
        <span>|</span>
        <span>Wind: {} km/h</span>
        <span>|</span>
        <span>Pressure: {} hPa</span>
      </div>
    </section>
  );
}

export default LiveConditions;
