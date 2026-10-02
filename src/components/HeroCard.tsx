import { Badge, Card } from '@mui/material';

function HeroCard() {
  return (
    <div className="w-full h-full">
      <Card className="w-full h-full">
        <div className="w-full h-full flex justify-center items-center space-y-2">
          
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-center p-2">18°</h1>
            <p className="text-lg text-center p-2 ">Sunny</p>
            <p className="text-sm text-center p-2">Feels like 20°</p>
            <div className="flex justify-items-start">
              <Badge className="mr-2" variant="dot"> H 20°</Badge>
              <Badge> H 20°</Badge>
            </div>
          </div>

          <div className="w-full h-full flex justify-center items-center">
            <Card className="w-[50%] h-[80%] justify-end items-center ml-22 opacity-45 flex">
              <p className="text-sm text-center">
                For this IoT weather dashboard, we focused on building a calm and immersive
                 experience where users can monitor forecasts, live conditions, humidity, 
                 wind, and temperature changes in one smooth flow.

                The dark glassmorphism - inspired interface, soft lighting, and structured
                 layout were designed to create a premium smart-device feeling while keeping
                  readability strong.
              </p>
            </Card>
          </div>

        </div>
      </Card>
    </div>
  )
}

export default HeroCard
