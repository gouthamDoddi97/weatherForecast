import { BiArrowFromRight } from 'react-icons/bi';
import type { RecentSearchedLocationType } from '../types/components.ts'
import { RecentSearchedLocations } from '../data/componentsData';

function RecentlySearched() {
  return (
    <div className="flex h-full w-full min-h-0 flex-col gap-3 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-gray-200 pi-2">
        <h2 className="text-base font-semibold">Searched</h2>
        <BiArrowFromRight className="absolute right-4 top-4 text-lg text-gray-400" />
      </header>
      <div className="flex flex-col gap-2 p-4">
        {
          RecentSearchedLocations.map((location: RecentSearchedLocationType, index: number) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{location.location}</span>
                <span className="text-sm text-gray-500">{location.time}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RecentlySearched
