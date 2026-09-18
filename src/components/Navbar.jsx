import { NavLink } from 'react-router'
import { navLinks, site } from '../data/site'
import { focusRing } from '../styles'

function linkClass({ isActive }) {
  return [
    focusRing,
    'transition-colors',
    isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900',
  ].join(' ')
}

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <NavLink
          to="/"
          className={`${focusRing} text-base font-semibold tracking-tight text-neutral-900`}
        >
          {site.name}
        </NavLink>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
