import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/userRelated/userHandle';
import Popup from '../../../components/Popup';
import { underControl } from '../../../redux/userRelated/userSlice';
import { getAllSclasses } from '../../../redux/sclassRelated/sclassHandle';
import { CircularProgress, Grid2 } from '@mui/material';
import { Container } from '@mui/system';

const AddStudent = ({ situation }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error } = userState;
    const { sclassesList } = useSelector((state) => state.sclass);

    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [cAddress, setCAddress] = useState("");
    const [pAddress, setPAddress] = useState("");
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('')
    const [className, setClassName] = useState('')
    const [sclassName, setSclassName] = useState('')

    const adminID = currentUser._id
    const role = "Student"
    const attendance = []

    useEffect(() => {
        if (situation === "Class") {
            setSclassName(params.id);
        }
    }, [params.id, situation]);

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        dispatch(getAllSclasses(adminID, "Sclass"));
    }, [adminID, dispatch]);

    const changeHandler = (event) => {
        if (event.target.value === 'Select Class') {
            setClassName('Select Class');
            setSclassName('');
        } else {
            const selectedClass = sclassesList.find(
                (classItem) => classItem.sclassName === event.target.value
            );
            setClassName(selectedClass.sclassName);
            setSclassName(selectedClass._id);
        }
    }

    const fields = { name, rollNum,email,phoneNo,gender,dob,cAddress,pAddress, password, sclassName, adminID, role, attendance }

    const submitHandler = (event) => {
        event.preventDefault()
        if (sclassName === "") {
            setMessage("Please select a classname")
            setShowPopup(true)
        }
        else {
            setLoader(true)
            dispatch(registerUser(fields, role))
        }
    }

    useEffect(() => {
        if (status === 'added') {
            dispatch(underControl())
            navigate(-1)
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            setMessage("Network Error")
            setShowPopup(true)
            setLoader(false)
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <Container maxWidth="md" sx={{paddingTop:{ xs: "210px", md: "10px" }, height: "100vh"}}>
            <div className="register">
                <style>
                    {`
                    .registerForm {
                        width: 100%;
                       margin-top: 20px;
                       display: grid;
                       grid-template-columns: repeat(2, 1fr);
                       gap: 10px
                    }
                    @media (max-width: 768px) {
                        .registerForm {
                            grid-template-columns: 1fr; /* Switch to a single column */
                        }
                    }
                    `}
                  </style>
                  <span className="registerTitle">Add Student</span>
                <form className="registerForm" onSubmit={submitHandler}>
                    
                    
                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Name</label>
                    <input className="registerInput" type="text" placeholder="Enter student's name..."
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoComplete="name" required />
                    </div>
                    {
                        situation === "Student" &&
                        <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                            <label style={{color: "var(--text-primary-color-light)"}}>Class</label>
                            <select
                                className="registerInput"
                                value={className}
                                onChange={changeHandler} required>
                                <option value='Select Class'>Select Class</option>
                                {sclassesList.map((classItem, index) => (
                                    <option key={index} value={classItem.sclassName}>
                                        {classItem.sclassName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    }
                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Email</label>
                    <input
                      className="registerInput"
                      type="email"
                      placeholder="Enter student's Email..."
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="email"
                      
                      
                    />
                    </div>

                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Phone No.</label>
                    <input
                      className="registerInput"
                      type="tel"
                      placeholder="Enter student's Phone no...."
                      value={phoneNo}
                      onChange={(event) => setPhoneNo(event.target.value)}
   
                    />

                    </div>
                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Gender</label>
                    <input
                      className="registerInput"
                      type="text"
                      placeholder="Enter student's gender..."
                      value={gender}
                      onChange={(event) => setGender(event.target.value)}
                      
                      autoComplete="gender"
                      
                    />
                    </div>

                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Date of Birth</label>
                    <input
                      className="registerInput"
                      type="Date"
                      placeholder="Enter student's Date of birth..."
                      value={dob}
                      onChange={(event) => setDob(event.target.value)}
                     
                      autoComplete="dob"
                      
                    />
                    </div>

                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Current Address</label>
                    <input
                      className="registerInput"
                      type="text"
                      placeholder="Enter student's Current Address..."
                      value={cAddress}
                      onChange={(event) => setCAddress(event.target.value)}
                    
                      autoComplete="cAddress"
                      
                    />
                    </div>

                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Permenent Address</label>
                    <input
                      
                      className="registerInput"
                      type="text"
                      placeholder="Enter student's Address..."
                      value={pAddress}
                      onChange={(event) => setPAddress(event.target.value)}
                      
                      autoComplete="pAdress"
                     
                    />
                    </div>

                   <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                   <label style={{color: "var(--text-primary-color-light)"}}>Roll Number</label>
                    <input className="registerInput" type="number" placeholder="Enter student's Roll Number..."
                        value={rollNum}
                        onChange={(event) => setRollNum(event.target.value)}
                        required />
                   </div>

                    <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
                    <label>Password</label>
                    <input className="registerInput" type="password" placeholder="Enter student's password..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password" required />
                    </div>

                    <button className="registerButton" type="submit" disabled={loader} style={{padding: "10px 25px"}}>
                        {loader ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Add'
                        )}
                    </button>
                    
                </form>
                    
            </div>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </Container>
    )
}

export default AddStudent