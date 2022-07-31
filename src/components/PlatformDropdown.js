import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PlatformDropdown() {
  const [platform, setPlatform] = useState("");

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 260 }}>
      <FormControl fullWidth focused={true}>
        <InputLabel id="demo-simple-select-label">Platform</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={platform}
          onChange={handleChange}
          sx={{ color: "white" }}
        >
          <MenuItem value={"xbox"}>Xbox</MenuItem>
          <MenuItem value={"pc"}>PC</MenuItem>
          <MenuItem value={"playstation"}>Playstation</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
