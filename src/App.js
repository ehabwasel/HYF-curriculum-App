import './App.css';
import Select from './components/Select';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './components/ItemList';
import Result from './components/Result';
import { ItemProvider } from './components/ItemsContext';

function App() {
  return (
    <ItemProvider>
      <div className='app-container'>
        <h1 className='title'>HackYourFuture curriculum </h1>
        <Router>
          <Select />

          <Switch>
            <Route path='/:type' children={<Result />}></Route>
          </Switch>
        </Router>
      </div>
    </ItemProvider>
  );
}

export default App;
