import React from 'react';
import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning react is fun' },
  { id: 'q2', author: 'Rahul', text: 'Learning flutter is fun' },
  { id: 'q3', author: 'Ravan', text: 'Learning vanilla Js is fun' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((item) => (item.id === params.id));

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.id}/comments`} component={Comments} />
    </>
  );
};

export default QuoteDetail;
