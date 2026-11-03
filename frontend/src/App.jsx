import Navbar from './components/Navbar';
import MatchCard from './components/MatchCard';
import mockMatches from './data/mockMatches';

import './styles/global.css';
import './App.css';

import UpcomingMatches from "./components/UpcomingMatches";
import RecentResults from "./components/RecentResults";

import {
  upcomingMatches,
  recentResults
} from "./data/mockMatches";

import { ChevronRight } from 'lucide-react';
import CricketNews from "./components/CricketNews";
import Footer from "./components/Footer";
import mockNews from "./data/mockNews";

function App() {
return ( <div className="app">

```
  <Navbar />

  <main>

    {/* HERO SECTION */}
    <section className="hero-section">

      <div className="hero-content">

        <span className="hero-label">
          THE HOME OF CRICKET
        </span>

        <h1>
          Every Ball.<br />
          Every Run.<br />
          <span>Every Moment.</span>
        </h1>

        <p>
          Stay connected to every moment of the game.
          Live scores, match updates and cricket insights
          — all in one place.
        </p>

        <a href="/live" className="hero-button">
          Explore Live Matches →
        </a>

      </div>

      <div className="hero-visual">
        <div className="cricket-ball">🏏</div>
      </div>

    </section>


    {/* LIVE MATCHES SECTION */}
    <section className="matches-section" id="live">

      <div className="section-heading">

        <div>
          <span className="section-label">
            MATCH CENTRE
          </span>

          <h2>Live Matches</h2>
        </div>

        <a href="/live">
          View All <ChevronRight size={17} />
        </a>

      </div>

      <div className="match-grid">

        {mockMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
          />
        ))}

      </div>

    </section>
<UpcomingMatches matches={upcomingMatches} />

<RecentResults results={recentResults} />
<CricketNews news={mockNews} />
  </main>
<Footer />
</div>
);
}

export default App;
