import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HeroCard from '../HeroCard';
import VerticalGrid from './VerticalGrid';
import DayTimeline from '../DayTimeline';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function ContentLayout() {
  return (
    <Grid
      container
      sx={{
        height: "100svh",
      }}
    >
      <Grid size={{ xs: 12, md: 8 }}>
        <VerticalGrid
          rowLength={3}
          componentsList={[
            { component: <HeroCard />, height: "60vh" },
            { component: <DayTimeline />, height: "20vh" },
            { component: <div className="bg-zinc-800"/>, height: "20vh" },
          ]}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Item sx={{ height: "100%" }}>
          Small Data
        </Item>
      </Grid>
    </Grid>
  );
}

export default ContentLayout
