import { useState } from 'react'
import { Box, IconButton, Slide } from '@mui/material'
import ClimateCardSmall from './ClimateCardSmall'
import { WeatherConditionIcons } from '../data/enums'
import { FaCircleArrowLeft, FaCircleArrowRight  } from "react-icons/fa6";

const data: {time: string, value: number, condition: keyof typeof WeatherConditionIcons}[] = [
  {time: "now", value: 20, condition: "Sunny"},
  {time: "2 pm", value: 20, condition: "Sunny"},
  {time: "3 pm", value: 19, condition: "Sunny"},
  {time: "4 pm", value: 18, condition: "Cloudy"},
  {time: "5 pm", value: 16, condition: "Cloudy"},
  {time: "6 pm", value: 15, condition: "Rain"},
  {time: "7 pm", value: 14, condition: "Rain"},
  {time: "8 pm", value: 13, condition: "Rain"},
  {time: "9 pm", value: 12, condition: "Rain"}
]


// type ClimateItem = {
//   time: string;
//   value: number;
//   condition: string;
// };

function ClimateCarousel() {
  const CARDS_PER_PAGE = 6;

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

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
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "100%",
      }}
    >
      {/* Left button */}
      <IconButton
        onClick={previous}
        disabled={page === 0}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "white",
          boxShadow: 2,

          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <FaCircleArrowLeft />
      </IconButton>

      {/* Carousel viewport */}
      <Box
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
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 2,
              width: "100%",
              height: "100%",
              padding: 1,
            }}
          >
            {visibleCards.map((item, index) => (
              <ClimateCardSmall
                key={`${item.time}-${index}`}
                time={item.time}
                temperature={item.value}
                condition={item.condition as keyof typeof WeatherConditionIcons}
              />
            ))}
          </Box>
        </Slide>
      </Box>

      {/* Right button */}
      <IconButton
        onClick={next}
        disabled={page === pageCount - 1}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "white",
          boxShadow: 2,

          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <FaCircleArrowRight />
      </IconButton>
    </Box>
  );
}

export default ClimateCarousel;
