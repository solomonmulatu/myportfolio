import React from 'react';
import data from "./footer.data.json";

const Footer=({})=>{
    return(
        <div>


        <footer id="footer">
            <div className="container">
                <h3>{data[0].name}</h3>
                <p>{data[1].quote}</p>
                <div className="social-links">
                    <a href={`https://twitter.com/${data[2].twitter}`} className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href={`https://www.facebook.com/${data[3].facebook}`} className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href={`https://www.instagram.com/${data[4].instagram}`} className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href={`https://www.linkedin.com/in/${data[5].linkedin}`} className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href={`https://t.me/${data[6].telegram}`} className="telegram"><i className="bx bxl-telegram"></i></a>

                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>{data[0].name}</span></strong>. All Rights Reserved
                </div>

            </div>
        </footer>

    <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></a>
    <div id="preloader"></div>
        </div>
    )
}
export default Footer;
