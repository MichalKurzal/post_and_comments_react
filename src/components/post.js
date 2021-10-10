import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Post = ({ postContent }) => {
  return (
    <Card sx={{ minWidth: 275, width: "80%", margin: 6 }}>
      <CardContent>
        <Typography variant="h3">{postContent.title}</Typography>
        <Typography variant="body2">
          <br />
          {postContent.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comments</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
