import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Characters } from "../../views/characters/Characters";
import { Episodes } from "../../views/episodes/Episodes";
import { Locations } from "../../views/locations/Locations";
import styles from "./App.module.scss";
import { PageTitle } from "../page-title/PageTitle";
import { Navigation } from "../navigation/Navigation";

export const App = () => {
  const pagesName = ["characters", "episodes", "locations"];

  return (
    <div className={styles.appWrapper}>
      <PageTitle />
      <Navigation pagesName={pagesName} />
      <Switch>
        <Route path={"/characters"}>
          <Characters />
        </Route>
        <Route path={"/episodes"}>
          <Episodes />
        </Route>
        <Route path={"/locations"}>
          <Locations />
        </Route>
        <Redirect to={"/characters"} />
      </Switch>
    </div>
  );
};
