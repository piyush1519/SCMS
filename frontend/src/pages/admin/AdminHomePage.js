import { Box, Container, Grid2, Paper } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import Fees from "../../assets/img4.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import BasicDateCalendar from '../../components/calendar';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
    {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }];

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                <Grid2 spacing={4}>

                    <Grid2 container width="100%"  sx={{
                        display: "flex",
                        justifyContent: "center"
                    }} spacing={2} >

                    <Grid2   xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Students} alt="Students" />
                            <Title>
                                Total Students
                                <Data start={0} end={numberOfStudents} duration={2.5} />
                            </Title>
                        </StyledPaper>
                    </Grid2>

                    <Grid2   xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Classes} alt="Classes" />
                            <Title>
                                Total Classes
                                <Data start={0} end={numberOfClasses} duration={5} />
                            </Title>
                        </StyledPaper>
                    </Grid2>

                    <Grid2   xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Teachers} alt="Teachers" />
                            <Title>
                                Total Teachers
                                <Data start={0} end={numberOfTeachers} duration={2.5} />
                            </Title>
                        </StyledPaper>
                    </Grid2>

                    <Grid2   xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Fees} alt="Fees" />
                            <Title>
                                Defualt Devices 
                                <Data start={0} end={23000} duration={2.5} prefix="$" />   
                            </Title>
                        </StyledPaper>
                    </Grid2>

                    </Grid2>

                    

                    <Grid2 container width="100%"  sx={{ mt: 4, mb: 4, padding: "0" }} spacing={1}>

                      {/* <Grid2 item xs={12} md={6}
                          sx={{
                            display: 'flex',
                            justifyContent: 'center', 
                            alignItems: 'center',      
                          }}
                      > */}
                        <Box sx={{ padding:"10px", width: { xs: '100%', md: 550 }, height: 500 }}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: "100%" }}>
                              <Title> Notices</Title>
                                <SeeNotice />
                            </Paper>
                        </Box>
                      {/* </Grid2> */}

                      {/* <Grid2 item xs={12} md={6}
                          sx={{
                            display: 'flex',
                            justifyContent: 'center', 
                            alignItems: 'center',      
                          }}
                      > */}
                        <Box sx={{ padding:"10px" ,width: { xs: '100%', md: 550 }, height: 500 }}>
                          <Paper sx={{  p: 2, display: 'flex', flexDirection: 'column', height: "100%" }}>
                            <Title> Average Expenses</Title>
                              <ResponsiveContainer sx ={{ width:"100%", height:"100%",  }} >
                                <AreaChart
                                  width={500}
                                  height={400}
                                  data={data}
                                  margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                  }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <Tooltip />
                                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                              </ResponsiveContainer>
                         </Paper>
                        </Box>
                      {/* </Grid2> */}
                    </Grid2>


                    <Grid2 container width="100%"  sx={{ mt: 4, mb: 4, padding: "0" }} spacing={1}>

                      
                        <Box sx={{ padding:"10px" ,width: { xs: '100%', md: 550 }, height: 500 }}>
                          <Paper sx={{  p: 2, display: 'flex', flexDirection: 'column', height: "100%" }}>
                            <Title> Average Expenses</Title>
                              <ResponsiveContainer sx ={{ width:"100%", height:"100%",  }} >
                                <AreaChart
                                  width={500}
                                  height={400}
                                  data={data}
                                  margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                  }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <Tooltip />
                                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                              </ResponsiveContainer>
                         </Paper>
                        </Box>
                      

                      
                        <Box sx={{ padding:"10px", width: { xs: '100%', md: 550 }, height: 500 }}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: "100%" }}>
                              
                                <BasicDateCalendar />
                            </Paper>
                        </Box>
                      </Grid2>


                    
                        
                     
                    
                </Grid2>
            </Container>
        </>
    );
};


const StyledPaper = styled(Paper)`

  padding: 30px;
  display: flex;
//   flex-direction: column;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
    display: flex;
    flex-direction: column;
  font-size: 1.25rem;
  padding-bottom: 10px
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;

export default AdminHomePage