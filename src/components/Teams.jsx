import { Outlet, useMatch } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'
import { Sidebar } from './Sidebar'

export default function Teams() {
  const { response: teamNames, loading } = useTeamNames()
  const match = useMatch('/teams')

  if (loading) return null

  return (
    <div className="container two-column">
      <Sidebar title="Teams :" listNames={teamNames} />

      {match && <h1 style={{ margin: '3rem' }}>Select a team</h1>}
      <Outlet />
    </div>
  )
}
