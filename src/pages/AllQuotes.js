import React from 'react';

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 1, author: 'Max', text: 'Learning react is fun' },
  { id: 2, author: 'Rahul', text: 'Learning flutter is fun' },
  { id: 3, author: 'Ravan', text: 'Learning vanilla Js is fun' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
