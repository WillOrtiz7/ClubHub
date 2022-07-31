import React from "react";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import avatarFindMatch from "../assets/avatar-find-match.png";

function CreateMatch(props) {
  // Manage state of the match time and selected platform for the new match being created
  const [matchTime, setMatchTime] = useState(new Date());
  const [matchPlatform, setMatchPlatform] = useState("");

  const handleChange = (event) => {
    setMatchPlatform(event.target.value);
  };

  function handleSubmit(matchTime, matchPlatform) {
    // Make api call here to post new match to database
    console.log("New match scheduled for ", matchTime, " on ", matchPlatform);
    // Close the create match component after submitting
    props.setCreateMatchOpen(!props.createMatchOpen);
  }

  function handleCancel() {
    // Close the create match component if cancelled
    props.setCreateMatchOpen(!props.createMatchOpen);
  }

  return (
    <div className="date-time-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Match time"
          value={matchTime}
          onChange={(newMatchTime) => {
            setMatchTime(newMatchTime);
          }}
        />
        <div className="platform-dropdown">
          <Box sx={{ minWidth: 260 }}>
            <FormControl fullWidth focused={true}>
              <InputLabel id="demo-simple-select-label">Platform</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={matchPlatform}
                onChange={handleChange}
                sx={{ color: "white" }}
              >
                <MenuItem value={"xbox"}>Xbox</MenuItem>
                <MenuItem value={"pc"}>PC</MenuItem>
                <MenuItem value={"playstation"}>Playstation</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </LocalizationProvider>
      <div className="submit-cancel-buttons">
        <button
          className="standard-clubhub-button"
          onClick={() => handleSubmit(matchTime, matchPlatform)}
        >
          Submit
        </button>
        <button
          className="standard-clubhub-button"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateMatch;
