import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Pricing-plan.module.css';

const cx = classNames.bind(styles);

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className="pricing-item">
    <i
      className={cx({
        icon: true,
        bronze: label === 'Bronze',
        silver: label === 'Silver',
        gold: label === 'Gold',
      })}
      style={{ backgroundImage: `url(${icon})` }}
    />
    <h2 className="label">{label}</h2>
    <p className="capacity">{capacity}</p>
    <p className="description">{description}</p>
    <p className="price">{price}/MO</p>
    <button type="button">Get Started</button>
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
