import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}>
      {stats.map(item => (
        <li
          className={styles.item}
          key={item.id}
          style={{
            backgroundColor: `#${Math.random()
              .toString(16)
              .substr(-6)}`,
          }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
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
