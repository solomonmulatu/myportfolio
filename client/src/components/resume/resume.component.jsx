import React from 'react';
import data from './resume.data.json'
const Resume=({})=>{
    return(
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Resume</h2>

                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>{data[0].name}</h4>
                            <p><em>{data[1].description}</em></p>
                            <ul>
                                <li>{data[2].city}</li>
                                <li>{data[3].phone}</li>
                                <li>{data[4].email}</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>{data[5].degree}</h4>
                            <h5>2015 - 2018</h5>
                            <p><em>{data[6].place}</em></p>
                                 </div>

                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Full Stack Developer</h4>
                            <h5>2020 - Present</h5>
                            <ul>
                                <li>Lead in the design, development, and implementation of the Project
                                </li>
                                <li>Delegate tasks to the  members of the front end and backend team and provide counsel on all
                                    aspects of the project.
                                </li>
                                <li>Supervise the assessment of all projects in order to ensure quality and
                                    accuracy of the project
                                </li>
                                <li>Developing front end website architecture.
                                </li>
                                <li>Creating servers and databases for functionality.
                                </li>
                                <li>Staying abreast of developments in web applications and programming languages.
                                </li>
                                <li>Meeting both technical and consumer needs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
export default Resume;
