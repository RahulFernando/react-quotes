import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";
import NoQuotesFound from "./components/quotes/NoQuotesFound";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact component={AllQuotes} />
          <Route path="/quotes/:id" component={QuoteDetail} />
          <Route path="/new-quote" component={NewQuote} />
          <Route path="*" component={NoQuotesFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
