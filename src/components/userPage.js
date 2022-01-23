import React, { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AppContext from '../api/contex';
import getUser from '../api/getUser';

const UserPage = () => {
    const { userID } = useContext(AppContext);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        console.log(userID);
        getUser(userID)
            .then((res) => {
                setUserData(res);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userID]);

    return (
        <Stack
            direction="column"
            spacing={3}
            sx={{
                paddingTop: 5,
            }}
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography variant="h3">{userData.name}</Typography>

            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6">Name : </Typography>
                <Typography>{userData.name}</Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6">Phone : </Typography>
                <Typography>{userData.phone}</Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6">City : </Typography>
                <Typography>
                    {userData.address !== undefined
                        ? userData.address.city
                        : null}
                </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6">ZipCode : </Typography>
                <Typography>
                    {userData.address !== undefined
                        ? userData.address.zipcode
                        : null}
                </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h6">E-Mail</Typography>
                <Typography>{userData.email}</Typography>
            </Stack>
        </Stack>
    );
};

export default UserPage;
