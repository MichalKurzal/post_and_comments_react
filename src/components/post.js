import React, { useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import getComments from "../api/comments";
import Comment from "./comment";

const Post = ({ postContent }) => {
  const [comments, setComments] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (param) => {
    console.log("comments");
    getComments(param).then((result) => {
      setComments(result);
      setExpanded(!expanded);
      console.log(result[0].name);
    });
  };

  return (
    <Card sx={{ minWidth: 275, width: "80%", margin: 6 }}>
      <CardMedia
        component="img"
        image="/columns.jpg"
        alt="columns"
        sx={{
          maxHeight: 600,
        }}
      />
      <CardContent>
        <Typography variant="h3">{postContent.title}</Typography>
        <Typography variant="body2">
          <br />
          {postContent.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleExpandClick(postContent.id)}>
          Comments
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Comment comments={comments} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
