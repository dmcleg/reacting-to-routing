import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [showFilms, setShowFilms] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return setFilms(response);
      });
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return setPeople(response);
      });
  });

  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
      <Link to={} className="btn btn-primary">
        Go Home
      </Link>
      <Link to={} className="btn btn-primary">
        View Films
      </Link>
      <Link to={} className="btn btn-primary">
        View People
      </Link>
      {/* {films.map((film) => {
          return (
            <>
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{films.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{films.original_title}</h6>
                  <h6 class="card-subtitle mb-2 text-muted">{films.original_title_romanized}</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </>
          );
        })} */}
    </Route>
  </Switch>
  </BrowserRouter>
  );
};

export default App;
