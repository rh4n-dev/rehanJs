import React from "react";
import * as microsoftTeams from "@microsoft/teams-js"
import { useEffect, useState } from "react";
import {
  makeStyles,
  shorthands,
  useId,
  Input,
  Label,
  Button,Divider
} from "@fluentui/react-components";

import "./App.css";
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        
    ...shorthands.gap("2px"),
    
    maxWidth: "400px",
},
});







const teamsfxSdk = require("@microsoft/teamsfx");
const { Client } = require("@microsoft/microsoft-graph-client");

const {
    TokenCredentialAuthenticationProvider,} = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");


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


const OnSubmitButtonClose  =  (ev) => {
    console.log("OnSubmitButtonClose");
  let details = { isSuccess: false, teamTitle: "testteam" }
  microsoftTeams.tasks.submitTask(details);
};

const AddTeams = (props) => {
  const inputId = useId("input");
  const styles = useStyles();
  

//   const TeamName = [""]
  const [TeamName,SetTeamName] = React.useState("");
//   const [MemberName,SetMemberName] = React.useState("");
   

    
  const onChange = (ev, data) => {
    console.log("test"+data);
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
    <div className= "container">
    <Divider style={{ height: "10%" }}>         
        </Divider>
    
        <div className="margin2">

            <div>
          <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
            Team Name
          </Label>
          <Input type="text" appearance="outline"  value={TeamName} onChange={onChange} id={inputId} />
          </div>
    
          <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
            Search Members 
          </Label>
          <Input type="text" appearance="outline"  value={TeamName} onChange={onChange} id={inputId} />
    
        <div className="taskButton">
       <Button type="submit"  onClick = {OnSubmitButtonClick } id="test">Add New Team</Button>;
       <Button  type="submit" onClick = {OnSubmitButtonClose}>cancel</Button>;
        </div>
     
    </div>
    </div>
  );
};

export default AddTeams;
