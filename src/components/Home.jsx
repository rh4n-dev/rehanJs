import React from "react";
import { Button } from "@fluentui/react-components";
import * as microsoftTeams from "@microsoft/teams-js";

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
      <div>
        <h1>Teams</h1>
      </div>

      <div>
        <h3>Add new team</h3>
        <br />
        <Button onClick={OnAddTeamButtonClick}>Add Team</Button>
      </div>
    </>
  );
};

export default Home;
