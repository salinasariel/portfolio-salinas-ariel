import React from 'react'
import NavBar from '../NavBar/NavBar'
import './AboutMe.css'
import CardEducation from './CardEducation';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AboutMe() {

    const educations = [
        { name: "Universidad Tecnologica Nacional", tittle: "Technical Degree in Programming", about: "Final Year. Comprehensive Programming Degree, covering a wide range of technologies and personal projects. On-site mode. Approved Courses: Programming 1 and 2, Programming Laboratory 1, 2, and 3, English 1 and 2, Data Processing Systems, Mathematics, Architecture and Operating Systems, MTV.", certificateurl: ""},
        { name: "Argentina Programa", tittle: "Full Stack Dev, Yo Programo", about: "In the last grade of the university career", certificateurl: "https://drive.google.com/file/d/1pTinHajDotxBZVSxa-EdigIGNVEYrap5/view?usp=sharing"}, 
        { name: "Argentina Programa", tittle: "Basic Dev, Se Programar", about: "In the last grade of the university career", certificateurl: "https://drive.google.com/file/d/19SWCEnsyT-PXZAlylohAh84-4OJTl08R/view?usp=sharing"},
        { name: "E.E.T.P. N°450", tittle: "Electro Mechanical technician", about: "Oriented High School.Industrial Machinery Automation. Industrial and Residential Electrical Installations. Robotics and Arduino Projects.", certificateurl: ""}
       ]
    const EducationList = educations.map((v) =>{
        return <CardEducation name= {v.name} tittle= {v.tittle} about= {v.about} certificateurl= {v.certificateurl}/>
    })

    const redirectToCV = () => {
        window.open('https://drive.google.com/file/d/1P3EjKntQTH9mqsQZEwHk8YuyW0zF0Ybz/view', '_blank');
    };
    return (
        <div>
            <NavBar />
            <div className='content scale-up-center'>
            <div className='center-button'>
                    <Button variant="outlined"  size="small"  onClick={redirectToCV}>Download my CV</Button>
                </div>
                
                
                
            </div>
            <div className='content scale-up-center'>
                <h1>Skills 🛠️</h1>
                
                
                
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