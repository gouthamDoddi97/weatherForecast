import React from 'react'
import { Box } from '@mui/material'

interface ComponentProps {
  rowLength: number;
  componentsList: { component: React.ReactNode, height?: string }[];
  height?: string; 
}

function VerticalGrid({ componentsList, height  }: ComponentProps) {
  return (
    <Box
      sx={{
        height: height? height : "100%",
        display: "grid",
        gridTemplateRows: componentsList
          .map(({ height }) => height)
          .join(" "),
        gap: 2,
      }}
    >
      {componentsList.map(({ component }, index) => (
        <Box
          key={index}
          sx={{
            minHeight: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
          {component}
        </Box>
      ))}
    </Box>
  );
}

export default VerticalGrid
