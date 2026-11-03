import { CalendarDays, MapPin, Clock } from "lucide-react";
import "./UpcomingMatches.css";

function UpcomingMatches({ matches }) {
  return (
    <section className="upcoming-section">

      <div className="section-heading">
        <div>
          <span className="section-label">DON'T MISS OUT</span>
          <h2>Upcoming Matches</h2>
        </div>
      </div>

      <div className="upcoming-grid">

        {matches.map((match) => (
          <div className="upcoming-card" key={match.id}>

            <div className="upcoming-header">
              <span>{match.tournament}</span>
              <CalendarDays size={18} />
            </div>

            <div className="match-date">
              {match.date}
            </div>

            <div className="upcoming-teams">
              <div>{match.team1}</div>
              <span>VS</span>
              <div>{match.team2}</div>
            </div>

            <div className="upcoming-info">
              <span><Clock size={14} /> {match.time}</span>
              <span><MapPin size={14} /> {match.venue}</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default UpcomingMatches;