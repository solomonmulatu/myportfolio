import React from 'react';
import data from './about.data.json'
const About=({})=>{

    return(
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About</h2>
                    <p>{data[0].about_text}</p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src="assets/img/profile.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>{data[1].proficiency}</h3>

                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> {data[2].birthday}</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> {data[3].phone}</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>City:</strong> {data[4].city}</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> {data[5].age}</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> {data[6].degree}</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> {data[7].email}</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            {data[8].description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About;
