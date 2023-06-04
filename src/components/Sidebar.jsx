/* eslint-disable react/prop-types */
import { useLocation, Link } from 'react-router-dom'
import { slugify } from '../utils'

const CustomLink = ({ to, children }) => {
  const location = useLocation()
  // const playerId = location.pathname.split('/')[2]
  // const isActive = playerId === to
  const toSegments = to.split('/')
  const pathSegments = location.pathname.split('/')

  const isActive =
    toSegments[toSegments.length - 1] === pathSegments[pathSegments.length - 1]
  const styles = isActive
    ? {
        fontWeight: '900',
        color: 'var(--white)',
      }
    : {}

  return (
    <li>
      <Link
        to={{
          pathname: to,
          search: location.search,
        }}
        style={{ ...styles }}
      >
        {children}
      </Link>
    </li>
  )
}

/* eslint-disable react/prop-types */
const Sidebar = ({ title, listNames }) => {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {listNames.map((playerName) => (
          <CustomLink key={playerName} to={slugify(playerName)}>
            {playerName.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

export { Sidebar }
