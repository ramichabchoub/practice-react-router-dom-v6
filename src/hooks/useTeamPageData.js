import useTeam from './useTeam'
import useTeamNames from './useTeamNames'
import useTeamsArticles from './useTeamsArticles'

function useTeamPageData(teamId) {
  const { loading: loadingTeamNames, response: teamNames } =
    useTeamNames(teamId)
  const { loading: loadingTeamArticles, response: teamArticles } =
    useTeamsArticles(teamId)
  const { loading: loadingTeam, response: team } = useTeam(teamId)

  return {
    teamNames,
    teamArticles,
    team,
    loading: loadingTeamNames || loadingTeamArticles || loadingTeam,
  }
}

export { useTeamPageData }
