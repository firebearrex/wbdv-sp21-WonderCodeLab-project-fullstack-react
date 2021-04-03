import './styles.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from './components/home';

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <Route path="/" exact={true}>
                  <HomePage/>
              </Route>
          </BrowserRouter>
      </div>
  );
}
export default App;