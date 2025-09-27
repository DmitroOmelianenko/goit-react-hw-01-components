import React from "react";
import "./Statistics.css";

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            className="item"
            key={id}
            style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
