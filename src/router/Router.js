import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CreateMovie from '../components/CreateMovie'
import Favorites from '../components/Favorites'
import MainLayout from '../components/MainLayout'
import Movies from '../components/Movies'


const Router = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/" component={Movies} exact />
          <Route path="/favorites" component={Favorites} exact />
          <Route path="/create-movie" component={CreateMovie} exact />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};  

export default Router;
