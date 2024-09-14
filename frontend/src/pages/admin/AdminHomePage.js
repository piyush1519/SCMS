import { Box, Container, Grid, Paper } from '@mui/material'
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
import Calendar from '../../components/Calender';
import CalendarGfg from '../../components/Calender';

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
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Students} alt="Students" />
                            <Title>
                                Total Students
                                <Data start={0} end={numberOfStudents} duration={2.5} />
                            </Title>
                            
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Classes} alt="Classes" />
                            <Title>
                                Total Classes
                                <Data start={0} end={numberOfClasses} duration={5} />
                            </Title>
                            
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Teachers} alt="Teachers" />
                            <Title>
                                Total Teachers
                                <Data start={0} end={numberOfTeachers} duration={2.5} />
                            </Title>
                            
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper>
                            <img src={Fees} alt="Fees" />
                            <Title>
                                Defualt Devices 
                                <Data start={0} end={23000} duration={2.5} prefix="$" />   
                            </Title>
                        </StyledPaper>
                    </Grid>
                    <Grid container maxWidth="lg"  sx={{ display: "flex", mt: 2, mb: 2 }} spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Box sx={{ padding:"20px", width: 600, height: 400 }}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Title> Notices</Title>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box sx={{ padding:"20px", width: 600, height: 400 }}>
                        
                        <Paper sx={{ height: "100%", p: 2, display: 'flex', flexDirection: 'column' }}>
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
                    </Grid>
                    </Grid>
                        


                    <Grid container maxWidth="lg"  sx={{ padding: "-20px", display: "flex", mt: 2, mb: 2 }} spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Box sx={{ padding:"20px", width: 600, height: 400 }}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Title> Calendar</Title>
                            <CalendarGfg />
                        </Paper>
                    </Grid>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box sx={{ padding:"20px", width: 600, height: 400 }}>
                        
                        <Paper sx={{ height: "100%", p: 2, display: 'flex', flexDirection: 'column' }}>
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
                    </Grid>
                    </Grid>   
                    
                </Grid>
            </Container>
        </>
    );
};


const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
//   flex-direction: column;
  height: 100px;
  justify-content: space-evenly;
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