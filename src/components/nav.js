import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  console.log(location);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coding Case
          </Typography>
          {location.pathname !== "/" ? (
            <Link to="/">
              <Button color="inherit">Logout</Button>
            </Link>
          ) : null}
          {location.pathname !== "/" ? (
            <Button color="inherit">New Post</Button>
          ) : null}
          {location.pathname !== "/" ? (
            <Link to="/user">
              <Button color="inherit">User</Button>
            </Link>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
