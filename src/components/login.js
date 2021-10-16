import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import loginMock from "../api/mocklogin";

export default function Login() {
  const history = useHistory();
  const submitLogin = () => {
    loginMock()
      .then(() => history.replace("./posts"))
      .catch(() => console.log("login rejected"));
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
        <Button
          color="primary"
          variant="contained"
          onClick={() => submitLogin()}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}
