import { Trophy } from "lucide-react";
import "./RecentResults.css";

function RecentResults({ results }) {
  return (
    <section className="results-section">

      <div className="section-heading">
        <div>
          <span className="section-label">MATCH HISTORY</span>
          <h2>Recent Results</h2>
        </div>
      </div>

      <div className="results-list">

        {results.map((match) => (
          <div className="result-card" key={match.id}>

            <div className="result-tournament">
              {match.tournament}
            </div>

            <div className="result-teams">

              <span>{match.team1}</span>
              <strong>{match.score1}</strong>

              <span className="result-vs">VS</span>

              <span>{match.team2}</span>
              <strong>{match.score2}</strong>

            </div>

            <div className="result-winner">
              <Trophy size={16} />
              {match.result}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default RecentResults;