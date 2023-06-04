/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import {
  useLocation,
  useSearchParams,
  Outlet,
  // useMatch,
} from 'react-router-dom'
import usePlayerNames from '../hooks/usePlayerNames'
import { Sidebar } from './Sidebar'

export default function Players() {
  const location = useLocation
  const [searchParams] = useSearchParams(location.search)
  // const match = useMatch('/players')

  // simple method is working fine
  // const team = searchParams.get('teamId')

  // but if we want more excellent way, to ignore cache in browser
  const [team, setTeam] = useState(searchParams.get('teamId'))
  useEffect(() => {
    if (location.search === '') {
      searchParams.delete('teamId')
      setTeam('')
    } else {
      setTeam(searchParams.get('teamId'))
    }
  }, [location.search, searchParams])

  const { response: playerNames, loading: loadingPlayerNames } =
    usePlayerNames(team)

  if (loadingPlayerNames) return null

  return (
    <div className="container two-column">
      <Sidebar title="Players :" listNames={playerNames} />

      {/* {match && <h1 style={{ margin: '3rem' }}>Select a player</h1>} */}
      <Outlet />
    </div>
  )
}
