import React from 'react';
import data from './hero.data.json'

const Hero=({})=>{


    return(
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>{data[0].name}</h1>
                <div className="social-links">
                    <a href={`https://twitter.com/${data[1].twitter}`} className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href={`https://www.facebook.com/${data[2].facebook}`} className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href={`https://www.instagram.com/${data[3].instagram}`} className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href={`https://www.linkedin.com/in/${data[4].linkedin}`} className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href={`https://t.me/${data[5].telegram}`} className="telegram"><i className="bx bxl-telegram"></i></a>

                </div>
            </div>
        </section>
    )
}
export default Hero;
