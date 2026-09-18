import { site } from '../data/site'
import { focusRing } from '../styles'

const linkClass = `${focusRing} text-neutral-500 transition-colors hover:text-neutral-900`

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-neutral-500">
          © {new Date().getFullYear()} {site.name}
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              Email
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
