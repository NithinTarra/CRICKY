import { ChevronRight } from "lucide-react";
import "./MatchCard.css";

function MatchCard({ match }) {
  return (
    <div className="match-card">

      <div className="match-header">
        <span>{match.tournament}</span>

        <span className={
          match.status === "LIVE"
            ? "live-status"
            : "completed-status"
        }>
          {match.status === "LIVE" && (
            <span className="live-dot"></span>
          )}
          {match.status}
        </span>
      </div>

      <div className="match-teams">

        <div className="team-row">
          <div className="team-info">
            <div className="team-badge">
              {match.team1.code}
            </div>
            <span>{match.team1.name}</span>
          </div>

          <div className="team-score">
            <strong>{match.team1.score}</strong>
            <small>({match.team1.overs})</small>
          </div>
        </div>

        <div className="team-row">
          <div className="team-info">
            <div className="team-badge">
              {match.team2.code}
            </div>
            <span>{match.team2.name}</span>
          </div>

          <div className="team-score">
            <strong>{match.team2.score}</strong>
            <small>({match.team2.overs})</small>
          </div>
        </div>

      </div>

      <div className="match-result">
        {match.result}
      </div>

      <button className="scorecard-btn">
        View Scorecard
        <ChevronRight size={16} />
      </button>

    </div>
  );
}

export default MatchCard;