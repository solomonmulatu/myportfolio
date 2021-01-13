import React from 'react';

const Portfolio=({})=>{
    return(
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Portfolio</h2>

                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-11.PNG" className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>MYBAB EVD RETAILOR APP</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-11.PNG" data-gall="portfolioGallery"
                                           className="venobox" title="App 1"><i className="bx bx-plus"></i></a>

                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-22.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Zoalna Booking Website</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-22.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>

                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-33.PNG" className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>MYBAB EVD RETAILOR APP</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-33.PNG" data-gall="portfolioGallery"
                                           className="venobox" title="App 2"><i className="bx bx-plus"></i></a>

                                    </div>
                                </div>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-55.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>MYBAB EVD(Electronic Voucher Distribution)</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-55.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>

                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-66.PNG" className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>MYBAB EVD RETAILOR APP</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-66.PNG" data-gall="portfolioGallery"
                                           className="venobox" title="App 3"><i className="bx bx-plus"></i></a>

                                    </div>
                                </div>
                        </div>
                    </div>





                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-99.jpg" className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Zoalna Booking Website</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-99.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>

                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Portfolio;
