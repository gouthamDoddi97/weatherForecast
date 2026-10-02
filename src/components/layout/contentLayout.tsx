import { Grid } from '@mui/material';
import HeroCard from '../HeroCard';
import VerticalGrid from './VerticalGrid';
import DayTimeline from '../DayTimeline';
import WeekTimeline from '../WeekTimeline';
import Header from './Header';
import LiveConditions from '../LiveConditions';
import RecentlySearched from '../RecentlySearched';

function ContentLayout() {
  return (
    <div className="w-full h-full">
      <Header />
      <Grid
        container
        sx={{
          height: "90svh",
        }}
      >
        
        <Grid size={{ xs: 12, md: 8 }}>
          <VerticalGrid
            rowLength={3}
            componentsList={[
              { component: <HeroCard />, height: "30vh" },
              { component: <DayTimeline />, height: "20vh" },
              { component: <WeekTimeline />, height: "30vh" },
            ]}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <VerticalGrid
            rowLength={2}
            componentsList={[
              { component: <LiveConditions />, height: "40vh" },
              { component: <RecentlySearched />, height: "60vh" },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContentLayout
