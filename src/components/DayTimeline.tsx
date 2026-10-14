import { useState } from 'react'
import { Box, IconButton, Slide } from '@mui/material'
import ClimateCardSmall from './ClimateCardSmall'
import { FaCircleArrowLeft, FaCircleArrowRight  } from "react-icons/fa6";
import { useWeather } from '../context/useWeather';

function ClimateCarousel() {
  const { weather, isLoading } = useWeather();
  const CARDS_PER_PAGE = 6;

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const data = weather?.hourly ?? [];
  const pageCount = Math.ceil(data.length / CARDS_PER_PAGE);

  const next = () => {
    if (page >= pageCount - 1) return;

    setDirection("left");
    setPage((prev) => prev + 1);
  };

  const previous = () => {
    if (page <= 0) return;

    setDirection("right");
    setPage((prev) => prev - 1);
  };

  const start = page * CARDS_PER_PAGE;
  const visibleCards = data.slice(start, start + CARDS_PER_PAGE);

  return (
    <Box
      className="hourly-carousel"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "calc(100% - 44px)",
      }}
    >
      <IconButton
        aria-label="Previous hours"
        onClick={previous}
        disabled={page === 0}
        className="carousel-button carousel-button-left"
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <FaCircleArrowLeft />
      </IconButton>

      <Box
        className="hourly-viewport"
        sx={{
          overflow: "hidden",
          mx: 6,
          height: "100%",
        }}
      >
        <Slide
          direction={direction}
          in={true}
          mountOnEnter
          unmountOnExit
          key={page}
        >
          <Box
            className="hourly-track"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
              gap: 1,
              width: "100%",
              height: "100%",
              padding: "8px 4px",
            }}
          >
            {visibleCards.map((item, index) => (
              <ClimateCardSmall
                key={`${item.time}-${index}`}
                time={item.time}
                temperature={item.temperature}
                condition={item.condition}
              />
            ))}
          </Box>
        </Slide>
      </Box>

      {isLoading && !weather && <div className="absolute inset-0 grid place-items-center bg-white/70">Loading forecast...</div>}
      {!isLoading && !weather && <div className="absolute inset-0 grid place-items-center bg-white/70">No hourly forecast available.</div>}

      <IconButton
        aria-label="Next hours"
        onClick={next}
        disabled={page === pageCount - 1}
        className="carousel-button carousel-button-right"
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <FaCircleArrowRight />
      </IconButton>
    </Box>
  );
}

export default ClimateCarousel;
