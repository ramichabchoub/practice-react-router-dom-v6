import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import TeamPage from './TeamPage'
import Player from './Player'
import Team from './Team'
import Articles from './Articles'
import Article from './Article'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<Player />} />
            {/* <Route path="" element={<h1>Select a player</h1>} /> */}
            <Route
              path=""
              element={
                <div className="sidebar-instruction">Select a player</div>
              }
            />
          </Route>
          <Route path="/teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route
              path=""
              element={<div className="sidebar-instruction">Select a team</div>}
            />
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
          <Route path="/:teamId/articles" element={<Articles />}>
            <Route path=":articleId" element={<Article />} />
            <Route
              path=""
              element={
                <div className="sidebar-instruction">Select an article</div>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
