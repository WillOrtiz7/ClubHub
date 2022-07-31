import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

function CreateMatch() {
  const [value, setValue] = React.useState(new Date());

  return (
    <div className="create-match-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Match time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default CreateMatch;
