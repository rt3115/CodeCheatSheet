import logo from './logo.svg';
import './App.css';
import {Route, Switch, HashRouter} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CodeDisplay } from './components/CodeDisplay';

function App() {
  return (
    <HashRouter>
        <Layout>
          <Switch>
            <Route path='/Home' component={Home} />
            <Route path='/CodeDisplay' component={CodeDisplay} />
          </Switch>
        </Layout>
    </HashRouter>
  );
}

export default App;
