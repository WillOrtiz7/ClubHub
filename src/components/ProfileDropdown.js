import React, { useState } from "react";
import defaultUser from "../assets/defaultuser.jpg";
import "../styles/ProfileDropdown.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const navigate = useNavigate();
  const { logout } = UserAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  async function handleLogout() {
    try {
      await logout();
    } catch (e) {
      console.log(e.message);
    }
  }
  function handleEditProfile(event) {
    setAnchorEl(event.currentTarget);
    navigate("/editprofile");
    handleClose();
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={defaultUser} alt="profile picture" height={32} width={32} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={handleEditProfile}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
