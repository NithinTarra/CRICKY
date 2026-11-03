import { ArrowUpRight } from "lucide-react";
import "./CricketNews.css";

function CricketNews({ news }) {
  return (
    <section className="news-section">

      <div className="section-heading">
        <div>
          <span className="section-label">LATEST UPDATES</span>
          <h2>Cricket News</h2>
        </div>

        <a href="/news">
          View All <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="news-grid">

        {news.map((item) => (
          <article className="news-card" key={item.id}>

            <div className="news-image">
              <img src={item.image} alt="Cricket news" />
            </div>

            <div className="news-content">

              <span className="news-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <div className="news-footer">
                <span>{item.time}</span>

                <button aria-label="Read article">
                  <ArrowUpRight size={18} />
                </button>
              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default CricketNews;