import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { AppContext } from "../api/contex";

export default function Login() {
  const { setLogin } = useContext(AppContext);
  const _setLogin = () => {
    setLogin(true);
    console.log("setLogin");
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: 10,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack
        spacing={4}
        divider={<Divider orientation="horizontal" flexItem />}
        direction="column"
      >
        <Typography variant="h3" gutterBottom>
          Login
        </Typography>
        <TextField required id="outlined-required" label="Name" />
        <TextField required id="outlined-required" label="Password" />
        <Link to="/posts" replace>
          <Button onClick={() => _setLogin()} variant="contained">
            Login
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
