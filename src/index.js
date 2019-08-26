import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/social-profile/Profile';
import Stats from './components/statistics-section/Stats';
import pricingPlanItems from './components/pricing-plan/pricing-plan.json';
import PricingPlan from './components/pricing-plan/PricingPlan';
import transactions from './components/transaction-history/transactions.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

ReactDOM.render(<Profile user={user} />, document.getElementById('root1'));

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

ReactDOM.render(
  <Stats title="Upload stats" stats={stats} />,
  document.getElementById('root2'),
);

ReactDOM.render(
  <PricingPlan items={pricingPlanItems} />,
  document.getElementById('root3'),
);

ReactDOM.render(
  <TransactionHistory items={transactions} />,
  document.getElementById('root4'),
);
