import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import newPost from '../api/newPost';
import { useLocation, Link } from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AppContext from '../api/contex';

export default function NavBar() {
  const location = useLocation();
  const { userID } = useContext(AppContext);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
  };
  const [open, setOpen] = useState(false);
  const [_post, setPost] = useState('New Post');
  const [_postTitle, setPostTitle] = useState('Post Title');

  const handleChange = (event) => {
    setPost(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setPostTitle(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const logout = () => localStorage.clear();
  const submitPost = (title, body) => {
    setOpen(false);
    newPost(title, body, userID);
  };

  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <Box sx={{ flexGrow: 1 }} data-testid="nav-element">
      <AppBar position="static">
        <Toolbar>
          <Link to="/posts">
            {location.pathname !== '/' ? (
              <Button style={linkStyle}>Coding Case - Posts</Button>
            ) : null}
          </Link>
          {location.pathname !== '/' ? (
            <Link to="/">
              <Button style={linkStyle} onClick={logout}>
                Logout
              </Button>
            </Link>
          ) : null}
          {location.pathname !== '/' ? (
            <div>
              <Button onClick={handleOpen} style={linkStyle}>
                New Post
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Create a new Post
                  </Typography>
                  <TextareaAutosize
                    value={_postTitle}
                    onChange={handleChangeTitle}
                    aria-label="minimum height"
                    minRows={2}
                    placeholder="Title of the Post"
                    style={{ width: '80%' }}
                  />
                  <TextareaAutosize
                    value={_post}
                    onChange={handleChange}
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Write a Post"
                    style={{ width: '80%' }}
                  />
                  <Button onClick={() => submitPost(_postTitle, _post)}>
                    Submit
                  </Button>
                </Box>
              </Modal>
            </div>
          ) : null}
          {location.pathname !== '/' ? (
            <Link to="/user">
              <Button style={linkStyle}>User</Button>
            </Link>
          ) : (
            <Button style={linkStyle}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
