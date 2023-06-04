import { Link } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames'
import TeamLogo from './TeamLogo'
import Loading from './Loading'

export default function Home() {
  const { loading, response: teamNames } = useTeamNames()

  if (loading) return <div>Loading...</div>
  if (!teamNames) return <div>Uh-oh.</div>

  const rederedTeamNames = teamNames.map((team) => {
    return (
      <Link key={team} to={`/${team}`}>
        <TeamLogo id={team} width="125" />
      </Link>
    )
  })

  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>
      <div className="home-grid">
        {loading === true ? <Loading /> : rederedTeamNames}
      </div>
    </div>
  )
}
