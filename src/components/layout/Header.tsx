import { Badge } from "@mui/material";
import { BsFillGeoAltFill } from "react-icons/bs";

const data = {
  city: "New York",
  state: "NY",
  country: "USA",
  date: "2023-03-15",
  dayOfWeek: "Wednesday",
}

function Header() {
  return (
    <div className="w-full h-[10vh] p-2 flex justify-evenly items-center bg-white shadow-md">
      <div className="flex justify-center items-center space-x-2 p-2">
        <div>
          <BsFillGeoAltFill />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{data.city}, {data.state}</h1>
          <p className="text-sm">{data.country} - {data.dayOfWeek}, {data.date}</p>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 p-2">
        <Badge className="mr-2" variant="dot" > Download App</Badge>
      </div>
    </div>
  )
}

export default Header
