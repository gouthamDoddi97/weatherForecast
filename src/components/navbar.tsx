import type { NavItem } from '../types/navbar';

function Navbar({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav className="w-full bg-white shadow-md flex flex-row items-center justify-center md:flex-col md:items-start md:justify-start md:h-screen">
      <div className="flex flex-row md:flex-col my-auto md:my-2.5 m-auto h-[70%] w-full">
        

        {navItems.map((item) => (
          <div
            className="flex m-auto my-4 md:my-8 items-center space-x-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
            key={item.title}
          >
            <span className="text-3xl m-auto">{item.icon}</span>

            <a
              href={item.href}
              className="text-lg font-semibold"
            >
            </a>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
