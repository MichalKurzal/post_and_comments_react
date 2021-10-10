import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

const Comment = ({ comments }) => {
  return comments.map((_comment) => (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      <Stack
        justifyContent="flex-start"
        alignItems="baseline"
        flexDirection="row"
      >
        <Avatar
          src="favicon.ico"
          sx={{ marginRight: 3, width: 36, height: 36 }}
        />

        <Typography> E-Mail: {_comment.email}</Typography>
      </Stack>
      <Stack justifyContent="flex-start" alignItems="flex-start">
        <Typography variant="h5">{_comment.name}</Typography>
        <Typography>{_comment.body}</Typography>
      </Stack>
    </Stack>
  ));
};

export default Comment;
