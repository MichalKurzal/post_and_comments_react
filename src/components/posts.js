import React, { useState, useEffect } from 'react';
import getPosts from '../api/getPosts';
import Box from '@mui/material/Box';
import Post from './post';

export default function Posts() {
    const [_posts, setposts] = useState([]);

    useEffect(() => {
        getPosts()
            .then((res) => {
                setposts(res);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <Box sx={boxStyle}>
            {_posts.map((post) => (
                <Post key={post.id} postContent={post} />
            ))}
        </Box>
    );
}
