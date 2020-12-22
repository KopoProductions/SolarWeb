import './App.css';

import {Route, Switch} from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage.page';

function App() {
  return (
    <Switch>
      <Route path='/SolarWeb' exact component={Homepage} />
    </Switch>
  );
}

export default App;
