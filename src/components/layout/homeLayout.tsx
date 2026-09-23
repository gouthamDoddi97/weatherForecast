import React from 'react'
import { Box } from '@mui/material'

function HomeLayout({ Nav, Body }: { Nav: React.ReactNode, Body: React.ReactNode }) {

return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        height: "100%",
      

        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "10%",
          },

          height: {
            xs: "10%",
            md: "100%",
          },

          order: {
            xs: 2,
            md: 1,
          },

          position: {
            xs: "fixed",
            md: "static",
          },

          bottom: {
            xs: 0,
            md: "auto",
          },

          zIndex: 1000,
        }}
      >
        {Nav}
      </Box>

      {/* Main */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "90%",
          },

          order: {
            xs: 1,
            md: 2,
          },

          paddingBottom: {
            xs: "70px",
            md: 0,
          },
        }}
      >
        {Body}
      </Box>
    </Box>
  )
}


export default HomeLayout
