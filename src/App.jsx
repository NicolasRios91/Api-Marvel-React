import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterList from "./views/CharacterList";
import ComicPreview from "./views/ComicPreview";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/comic">
          <ComicPreview />
        </Route>
        <Route path="/">
          <CharacterList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
