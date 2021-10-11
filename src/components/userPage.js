import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const UserPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <Typography variant="h3">User Name</Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">Name</Typography>
        <Typography>Placeholder</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">Age</Typography>
        <Typography>Placeholder</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">Adress</Typography>
        <Typography>Placeholder</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">E-Mail</Typography>
        <Typography>Placeholder</Typography>
      </Stack>
    </Box>
  );
};

export default UserPage;
