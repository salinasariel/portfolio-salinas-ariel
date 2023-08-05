import React from 'react'
import NavBar from '../NavBar/NavBar'
import CardProyects from './CardProyects'

function Proyects() {
    const myProyects = [
        { name: "Reservation Platform", tittle: "ReactJS - APIs - Bootstrapt", about: "Final Year. Comprehensive Programming Degree, covering a wide range of technologies and personal projects. On-site mode. Approved Courses: Programming 1 and 2, Programming Laboratory 1, 2, and 3, English 1 and 2, Data Processing Systems, Mathematics, Architecture and Operating Systems, MTV.", certificateurl: ""},
        { name: "Argentina Programa", tittle: "Full Stack Dev, Yo Programo", about: "In the last grade of the university career", certificateurl: "https://drive.google.com/file/d/1pTinHajDotxBZVSxa-EdigIGNVEYrap5/view?usp=sharing"}, 
        
       ]
    const ProyectsList = myProyects.map((v) =>{
        return <CardProyects name= {v.name} tittle= {v.tittle} about= {v.about} certificateurl= {v.certificateurl}/>
    })

    
    return (
        <div>
            
            <div className='content scale-up-center'>
                <h1>My Proyects 👨‍💻</h1>
                
                {ProyectsList}
            </div>
        </div>
    )
}

export default Proyects