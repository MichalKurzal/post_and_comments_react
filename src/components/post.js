import React, { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Modal from "@mui/material/Modal";
import getComments from "../api/comments";
import Comment from "./comment";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import editPost from "../api/editPost";
import AppContext from "../api/contex";

const Post = ({ postContent }) => {
  const { userID } = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [_post, setPost] = useState("New Post");
  const [_postTitle, setPostTitle] = useState("Post Title");

  useEffect(() => {
    setPost(postContent.body);
    setPostTitle(postContent.title);
  }, [postContent]);

  const handleExpandClick = (param) => {
    console.log("comments");
    getComments(param)
      .then((result) => {
        setComments(result);
        setExpanded(!expanded);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
  };

  const handleChange = (event) => {
    setPost(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setPostTitle(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const submitPost = (title, body, id) => {
    setOpen(false);
    editPost(title, body, id, userID);
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
        <Button size="small">New Comment</Button>
        <Button size="small" onClick={handleOpen}>
          Edit Post
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit a Post
            </Typography>
            <TextareaAutosize
              value={_postTitle}
              onChange={handleChangeTitle}
              aria-label="minimum height"
              minRows={2}
              placeholder="Title of the Post"
              style={{ width: "80%" }}
            />
            <TextareaAutosize
              value={_post}
              onChange={handleChange}
              aria-label="minimum height"
              minRows={10}
              placeholder="Write a Post"
              style={{ width: "80%" }}
            />
            <Button
              onClick={() => submitPost(_postTitle, _post, postContent.id)}
              color="inherit"
            >
              Submit
            </Button>
          </Box>
        </Modal>
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
