import { Switch, Route } from 'react-router-dom';

import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import { Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import NoQuotesFound from './components/quotes/NoQuotesFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact component={AllQuotes} />
        <Route path="/quotes/:id" component={QuoteDetail} />
        <Route path="/new-quote" component={NewQuote} />
        <Route path="*" component={NoQuotesFound} />
      </Switch>
    </Layout>
  );
}

export default App;
