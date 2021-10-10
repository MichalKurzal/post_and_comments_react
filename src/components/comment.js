import Typography from "@mui/material/Typography";

const Comment = ({ comments }) => {
  return comments.map((_comment) => <Typography>{_comment.name}</Typography>);
};

export default Comment;
