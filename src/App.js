import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Account } from './modules/Account/account';
import { Todos } from './modules/Home/todo'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Account} />
          <Route exact path={'/todo/activities'} component={Todos} />
          <Route exact path="*" render={() => <Redirect to={'/'} />} />
        </Switch>
      </Router>
    </QueryClientProvider>
  </>
}

export default App;
