import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';

const PricingPlan = ({ items = [] }) => (
  <ul className="pricing-plan">
    {items.map(item => (
      <li className="item" key={item.label}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
