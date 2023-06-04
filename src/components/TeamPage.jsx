import { useParams, Link } from 'react-router-dom'
import { useTeamPageData } from '../hooks/useTeamPageData'
import TeamLogo from './TeamLogo'
import { slugify } from '../utils'

export default function TeamPage() {
  const { teamId } = useParams()

  const { teamNames, teamArticles, team, loading } = useTeamPageData(teamId)
  // console.log({ teamNames, teamArticles, team, loading })

  if (loading) return <div>Loading...</div>

  if (!teamNames.includes(teamId)) {
    return (
      <h1 className="text-center">The {teamId} team does not a valid team.</h1>
    )
  }

  const renderedTeamChampionships = team.championships.map((champ) => (
    <li key={champ}>{champ}</li>
  ))

  const rederedTeamArticles = teamArticles.map((article) => (
    <li key={article.id}>
      <h4 className="article-title">
        <Link to={`articles/${slugify(article.title)}`}>{article.title}</Link>
      </h4>
      <div className="article-date">
        {new Date(article.date).toLocaleDateString()}
      </div>
    </li>
  ))

  return (
    <div className="panel">
      <TeamLogo id={teamId} />
      <h1 className="medium-header">{team.name}</h1>
      <h4 style={{ margin: '5px' }}>
        <Link to={{ pathname: '/players', search: `?teamId=${teamId}` }}>
          View Roster
        </Link>
      </h4>
      <h4>Championships :</h4>
      <ul className="championships">{renderedTeamChampionships}</ul>
      <ul className="info-list row" style={{ width: '100%' }}>
        <li>
          Established: <div>{team.established}</div>
        </li>
        <li>
          Manager: <div>{team.manager}</div>
        </li>
        <li>
          Coach: <div>{team.coach}</div>
        </li>
        <li>
          Records:
          <div>
            wins: {team.wins}- losses: {team.losses}
          </div>
        </li>
      </ul>
      <ul className="articles">{rederedTeamArticles}</ul>
    </div>
  )
}
