import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Pricing-plan.module.css';

const cx = classNames.bind(styles);

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <i
      className={cx({
        icon: true,
        bronze: label === 'Bronze',
        silver: label === 'Silver',
        gold: label === 'Gold',
      })}
      style={{ backgroundImage: `url(${icon})` }}
    />
    <h2
      className={cx({
        label: true,
        bronzeLabel: label === 'Bronze',
        silverLabel: label === 'Silver',
        goldLabel: label === 'Gold',
      })}
    >
      {label}
    </h2>
    <p className={styles.capacity}>{capacity}</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>{price}/MO</p>
    <button
      type="button"
      className={cx({
        button: true,
        bronzeBtn: label === 'Bronze',
        silverBtn: label === 'Silver',
        goldBtn: label === 'Gold',
      })}
    >
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
