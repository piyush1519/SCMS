import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
import { useNavigate } from 'react-router-dom'
import { authLogout } from '../../redux/userRelated/userSlice';
import { Avatar, Box, Button, Collapse, Container, Grid2, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

// import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const [showTab, setShowTab] = useState(false);
    const buttonText = showTab ? 'Cancel' : 'Edit profile';

    const navigate = useNavigate()
    const dispatch = useDispatch();
        // const { currentUser } = useSelector((state) => state.user);
    const { currentUser, response, error } = useSelector((state) => state.user);
    const address = "Admin"

    if (response) { console.log(response) }
    else if (error) { console.log(error) }

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState("");
    const [schoolName, setSchoolName] = useState(currentUser.schoolName);

    const fields = password === "" ? { name, email, schoolName } : { name, email, password, schoolName }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(updateUser(fields, currentUser._id, address))
    }

    const deleteHandler = () => {
        try {
            dispatch(deleteUser(currentUser._id, "Students"));
            dispatch(deleteUser(currentUser._id, address));
            dispatch(authLogout());
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
        <Container sx={{display: "flex", flexDirection: "column", paddingTop: "20px", gap: "20px"}}>
            <StyledPaper>
            <Grid2 container spacing={2} sx={{display: "flex", justifyContent: "space-evenly"}}>
            <Grid2  xs={12}>
              <Box display="flex" justifyContent="center">
                <Avatar alt="Student Avatar" sx={{ width: 150, height: 150 }}>
                  {String(currentUser.name).charAt(0)}
                </Avatar>
              </Box>
            </Grid2>  
            <Grid2 sx={{display: "flex",flexDirection: "column", flexWrap: { xs: "wrap", md: "nowrap" }}}>
            <Grid2  xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  School: {currentUser.name}
                </Typography>
              </Box>
            </Grid2>
            <Grid2  xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  School: {currentUser.email}
                </Typography>
              </Box>
            </Grid2>
            <Grid2  xs={12}>
              <Box display="flex" justifyContent="center">
                <Typography variant="subtitle1" component="p" textAlign="center">
                  School: {currentUser.schoolname}
                </Typography>
              </Box>
            </Grid2>
            </Grid2> 
            </Grid2>
            </StyledPaper>
        

        
            {/* Name: {currentUser.name}
            <br />
            Email: {currentUser.email}
            <br />
            School: {currentUser.schoolName}
            <br /> */}
            <Grid2 container spacing={2} sx={{display: "flex", justifyContent: "space-evenly"}}>
            { <Button variant="contained" color="error" onClick={deleteHandler}>Delete Account</Button> }
            <Button variant="contained" sx={styles.showButton}
                onClick={() => setShowTab(!showTab)}>
                {showTab ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{buttonText}
            </Button>
            </Grid2>
            <Grid2>
            
            <Collapse in={showTab} timeout="auto" unmountOnExit>
                <div className="register" style={{height: "77vh"}}>
                    <form className="registerForm" onSubmit={submitHandler}>
                        <span className="registerTitle">Edit Details</span>
                        <label>Name</label>
                        <input className="registerInput" type="text" placeholder="Enter your name..."
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            autoComplete="name" required />

                        <label>School</label>
                        <input className="registerInput" type="text" placeholder="Enter your school name..."
                            value={schoolName}
                            onChange={(event) => setSchoolName(event.target.value)}
                            autoComplete="name" required />

                        <label>Email</label>
                        <input className="registerInput" type="email" placeholder="Enter your email..."
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="email" required />

                        <label>Password</label>
                        <input className="registerInput" type="password" placeholder="Enter your password..."
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="new-password" />

                        <button className="registerButton" type="submit" >Update</button>
                    </form>
                </div>
            </Collapse> 
           
            </Grid2>
            </Container>
        </div>

    )
}

export default AdminProfile

const styles = {
    attendanceButton: {
        backgroundColor: "#270843",
        "&:hover": {
            backgroundColor: "#3f1068",
        }
    }
}

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;