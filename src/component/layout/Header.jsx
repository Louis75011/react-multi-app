import { useState } from 'react'
import '../../style/layout/Header.scss'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <h1>Multi-App</h1>
        </a>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          Menu
        </button>

        <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
