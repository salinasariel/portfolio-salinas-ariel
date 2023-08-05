import React from 'react'
import NavBar from '../NavBar/NavBar'
import './AboutMe.css'
import CardEducation from './CardEducation';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



function AboutMe() {
    const redirectToCV = () => {
        window.open('https://drive.google.com/file/d/1P3EjKntQTH9mqsQZEwHk8YuyW0zF0Ybz/view', '_blank');
    };

    const educations = [
        { name: "Universidad Tecnologica Nacional", tittle: "Technical Degree in Programming", about: "Final Year. Comprehensive Programming Degree, covering a wide range of technologies and personal projects. On-site mode. Approved Courses: Programming 1 and 2, Programming Laboratory 1, 2, and 3, English 1 and 2, Data Processing Systems, Mathematics, Architecture and Operating Systems, MTV.", certificateurl: "" },
        { name: "Argentina Programa", tittle: "Full Stack Dev, Yo Programo", about: "End of the journey to be 'Full Stack Developer', intensive course of 7 months. Learn of agile methodologies, SCRUM methods, search and data collection was acquired. Programming with ArgularTS and Spring. Delivering final project at the end of it.", certificateurl: "https://drive.google.com/file/d/1pTinHajDotxBZVSxa-EdigIGNVEYrap5/view?usp=sharing" },
        { name: "Argentina Programa", tittle: "Basic Dev, Se Programar", about: "Basic fundamentals of programming. Introductory course with JavaScript and Ruby technologies", certificateurl: "https://drive.google.com/file/d/19SWCEnsyT-PXZAlylohAh84-4OJTl08R/view?usp=sharing" },
        { name: "E.E.T.P. N°450", tittle: "Electro Mechanical technician", about: "Oriented High School.Industrial Machinery Automation. Industrial and Residential Electrical Installations. Robotics and Arduino Projects.", certificateurl: "" }
    ]
    const EducationList = educations.map((v) => {
        return <CardEducation name={v.name} tittle={v.tittle} about={v.about} certificateurl={v.certificateurl} />
    })


    return (
        <div>
            <div class="button-container">
                <button className='button-cv' variant="outlined" size="small" onClick={redirectToCV}>Download my CV</button>
            </div>

            <div className='content'>
                <h1>Skills 🛠️</h1>
                <div className="row justify-content-center">
                <div className="col-12 col-md-4 col-lg-3 imag">
                        
                        <CircularProgressbar
                            value={90}
                            text={'HTML5'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#FF6D60",
                                textColor: "#fff",
                                pathColor: "#3C486B",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 imag">
                        
                        <CircularProgressbar
                            value={85}
                            text={'CSS3'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "#fff",
                                pathColor: "#3C486B",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 imag">
                        
                        <CircularProgressbar
                            value={80}
                            text={'JavaScript'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#F7D060",
                                textColor: "#fff",
                                pathColor: "#3C486B",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 imag">
                        
                        <CircularProgressbar
                            value={70}
                            text={'React'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#93BFCF",
                                textColor: "#fff",
                                pathColor: "#3C486B",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 imag">
                        
                        <CircularProgressbar
                            value={70}
                            text={'Angular'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#FFB4B4",
                                textColor: "#fff",
                                pathColor: "#3C486B",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 imag">
                        
                        <CircularProgressbar
                            value={65}
                            text={'Python'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#6096B4",
                                textColor: "#fff",
                                pathColor: "#3C486B",
                                trailColor: "transparent"
                            })}
                        />
                    </div> 
                    <div className="col-12 col-md-4 col-lg-3 imag">
                        
                        <CircularProgressbar
                            value={70}
                            text={'English'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#B4E4FF",
                                textColor: "#fff",
                                pathColor: "#3C486B",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className='content scale-up-center'>
                <h1>Education 📖</h1>

                {EducationList}


            </div>
            <ToastContainer />
        </div>
    )
}

export default AboutMe