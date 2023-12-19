import React from "react";
import { Button } from "@fluentui/react-components";
import * as microsoftTeams from "@microsoft/teams-js";
import "./Home.css"

const Home = () => {
  let OnAddTeamButtonClick = () => {
    let appBaseUrl = window.location.origin;
    console.log("test");
    console.log(appBaseUrl);

    microsoftTeams.tasks.startTask(
      {
        completionBotId: "",
        title: "Add Team", // TO DO Add Localization
        height: 600,
        width: 600,
        url: appBaseUrl + "/index.html#/addTeam",
        fallbackUrl: appBaseUrl + "/index.html#/addTeam",
      },
      AddTeamCallBack
    );
  };

  let AddTeamCallBack = async () => {
    console.log("AddTeamCallBack");
  };

  return (
    <>
      <div className="content">
        <div className="Team">
          <h1>Teams</h1>
        </div>
        <div className="Team">
          <h3>Add new team</h3>
        </div>

        <div className="Button">
          <Button onClick={OnAddTeamButtonClick}>Add Team</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
