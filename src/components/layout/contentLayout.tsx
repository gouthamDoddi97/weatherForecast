import HeroCard from '../HeroCard';
import DayTimeline from '../DayTimeline';
import WeekTimeline from '../WeekTimeline';
import Header from './Header';
import LiveConditions from '../LiveConditions';
import RecentlySearched from '../RecentlySearched';
import WindMap from '../WindMap';

function ContentLayout() {
  return (
    <div className="weather-app">
      <Header />
      <main className="weather-dashboard">
        <div className="forecast-column">
          <section className="dashboard-current"><HeroCard /></section>
          <section className="dashboard-hourly section-panel" aria-labelledby="hourly-heading">
            <div className="panel-heading-row"><h2 id="hourly-heading" className="section-heading">Today, by the hour</h2><span className="section-kicker">Next hours</span></div>
            <DayTimeline />
          </section>
          <section className="dashboard-week section-panel" aria-labelledby="week-heading">
            <div className="panel-heading-row"><h2 id="week-heading" className="section-heading">7-day forecast</h2><span className="section-kicker">High / low</span></div>
            <WeekTimeline />
          </section>
        </div>
        <aside className="conditions-column">
          <LiveConditions />
          <RecentlySearched />
          <WindMap />
        </aside>
      </main>
    </div>
  );
}

export default ContentLayout
