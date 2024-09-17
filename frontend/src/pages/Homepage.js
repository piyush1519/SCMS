import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid2, Box, Button } from '@mui/material';
import styled from 'styled-components';
import images from "../assets/images.jpg";
import { GreenButton, LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer >
            <Grid2 container spacing={0} sx={{display: "flex", flexWrap: { xs: "wrap", md: "nowrap" }}}>
                <Grid2 item xs={12} md={6} sx={{padding: "50px 0px"}}>
                    { <img src={images} alt="images" style={{ width: '100%' }} /> }
                </Grid2>
                <Grid2 item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Smart
                            <br />
                            Classroom Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Welcome to the World of Automation.<br/>
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <GreenButton variant="contained" fullWidth sx={{padding:"10px 15px"}}>
                                    Login
                                </GreenButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3,padding:"5px 10px", color: "var(--secondary-color-light)", borderColor: "var(--secondary-color-light)", fontSize: "16px" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"var(--secondary-color-light)"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid2>
            </Grid2>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding 120px 50px 50px 50px;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: var(--text-primary-color-light);
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  color: var(--text-secondary-color-light)
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
