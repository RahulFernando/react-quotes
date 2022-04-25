import React from 'react';

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning react is fun' },
  { id: 'q2', author: 'Rahul', text: 'Learning flutter is fun' },
  { id: 'q2', author: 'Ravan', text: 'Learning vanilla Js is fun' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
