import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Prestations from './components/pages/Prestations';
import Photos from './components/pages/Photos';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/" exact><Home /></Route>
               <Route path="/Prestations" exact><Prestations /></Route>
               <Route path="/Photos" exact><Photos /></Route>
               <Route path="/Contact" exact><Contact /></Route>
               <Route><Error /></Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;