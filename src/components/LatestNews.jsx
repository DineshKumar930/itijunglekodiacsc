import React from "react";
import "./LatestNews.css";
import { CalendarDays, ArrowRight, BellRing } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Admission Open for Session 2026-27",
    date: "26 June 2026",
    category: "Admission",
    description:
      "Applications are invited for various engineering and non-engineering trades."
  },
  {
    id: 2,
    title: "Campus Placement Drive Scheduled",
    date: "20 June 2026",
    category: "Placement",
    description:
      "Leading industries will visit the institute for campus recruitment."
  },
  {
    id: 3,
    title: "Skill Competition Registration Started",
    date: "15 June 2026",
    category: "Event",
    description:
      "Students can participate in district level skill competitions."
  }
];

const LatestNews = () => {
  return (
    <section className="latest-news">
      <div className="news-header">
        <span className="news-badge">
          <BellRing size={18} />
          Latest Updates
        </span>

    

        <p>
          Stay updated with admissions, placements, examinations and institute
          activities.
        </p>
      </div>

      <div className="news-grid">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <div className="news-category">{news.category}</div>

            <div className="news-date">
              <CalendarDays size={15} />
              {news.date}
            </div>

            <h3>{news.title}</h3>

            <p>{news.description}</p>

            <button className="news-btn">
              Read More
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;