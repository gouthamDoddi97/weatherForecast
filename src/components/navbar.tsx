import type { NavItem } from '../types/navbar';

function Navbar({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav className="side-nav" aria-label="Main navigation">
      <a className="nav-brand" href="/" aria-label="Weather home">W</a>
      <div className="nav-links">
        {navItems.map((item) => (
          <a className="nav-item" href={item.href} key={item.title} title={item.title} aria-label={item.title}>
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-label">{item.title}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
