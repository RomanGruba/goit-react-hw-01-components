import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ title, stats }) => (
  <section className="stats-section">
    <h2 className="title">{title}</h2>

    <ul className="stat-list">
      {stats.map(item => (
        <li className="item" key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Stats;

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};