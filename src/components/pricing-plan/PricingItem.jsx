import React from 'react';
import PropTypes from 'prop-types';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className="pricing-item">
    <i className={icon} />
    <h2 className="label">{label}</h2>
    <p className="capacity">{capacity}</p>
    <p className="description">{description}</p>
    <p className="price">{price}/MO</p>
    <button className="button">Get Started</button>
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
