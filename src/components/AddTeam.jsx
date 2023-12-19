import React from "react";
import * as microsoftTeams from "@microsoft/teams-js"
import { useEffect, useState } from "react";
import "./AddTeam.css";
import {
  makeStyles,
  shorthands,
  useId,
  Input,
  Label,
  Button, Divider
} from "@fluentui/react-components";









const teamsfxSdk = require("@microsoft/teamsfx");
const { Client } = require("@microsoft/microsoft-graph-client");

const {
  TokenCredentialAuthenticationProvider, } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");


const res = {
  status: 700,
  body: {},
};

// res.body.receivedHTTPRequestBody = req.body || "";





const OnSubmitButtonClick = (e) => {
  console.log("OnSubmitButtonClick");
  let details = { isSuccess: true, teamTitle: "testteam" }
  microsoftTeams.tasks.submitTask(details);
  console.log(details)
}


const OnSubmitButtonClose = (ev) => {
  console.log("OnSubmitButtonClose");
  let details = { isSuccess: false, teamTitle: "testteam" }
  microsoftTeams.tasks.submitTask(details);
};

const AddTeams = (props) => {
  const inputId = useId("input");
  // const styles = useStyles();


  //   const TeamName = [""]
  const [TeamName, SetTeamName] = React.useState("");
  const [MemberName, SetMemberName] = React.useState("");



  const onChange = (ev, data) => {
    console.log("test" + data);
    // The controlled input pattern can be used for other purposes besides validation,
    // but validation is a useful example
    if (data.value.length <= 20) {
      SetTeamName(data.value);
      // SetMemberName(data)
    }
  };


  // useEffect(() => {
  //   console.log("add team called ");
  // });

  return (
    <div className="container">
      {/* <Divider style={{ height: "10%" }}>         
        </Divider> */}

      <div className="margin2">

        <div className="teamName">
          <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
            Team Name
          </Label>
        </div>
        <div className="Enter">
          <Input type="text" size="large" appearance="outline" value={TeamName} onChange={onChange} id={inputId} />
        </div>

        <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
          Search Members
        </Label>
        <div>
          <Input type="text" size="large" appearance="outline" value={MemberName} onChange={onChange} id={inputId} />
        </div>
        <div className="taskButton">
          <Button type="submit" size="large" shape="rounded" onClick={OnSubmitButtonClick} id="test">Add New Team</Button>
          <Button type="submit" size="large" shape="rounded" onClick={OnSubmitButtonClose}>Cancel</Button>
        </div>

      </div>
    </div>
  );
};

export default AddTeams;
