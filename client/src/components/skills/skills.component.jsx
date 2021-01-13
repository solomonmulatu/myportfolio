import React from 'react';


const Skills=({})=>{

    return(
        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">HTML <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar"  style={{width: "90%"}} aria-valuenow={100} aria-valuemin={50} aria-valuemax={100}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CSS <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "75%"}}  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar"  style={{width: "80%"}}  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Java <i className="val">50%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar"  style={{width: "50%"}}  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">Nodejs <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Reactjs <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}}  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Adobe Xd <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "75%"}}  aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Jquery <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" style={{width: "75%"}}  aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Skills;
