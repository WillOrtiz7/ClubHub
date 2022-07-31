import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import avatarFindMatch from "../assets/avatar-find-match.png";
import PlatformDropdown from "./PlatformDropdown";

function CreateMatch() {
  const [value, setValue] = React.useState(new Date());

  return (
    <div className="date-time-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Match time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
        <div className="platform-dropdown">
          <PlatformDropdown />
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default CreateMatch;
