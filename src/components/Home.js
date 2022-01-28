import React from "react";

function Home (){
    return (
        <div>


            <section className="slider p-md-0">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="bg-overlay bg-black opacity-4"></div>
                            <img src="/vendor/images/jollof002.jpg" alt="slider" />
                                <div className="container slider-text">
                                    <div className="row">
                                        <div className="col-12 col-md-6"></div>
                                        <div className="col-12 col-md-6 text-center text-md-left mb-0 mb-md-5">
                                            <h1 className="main-font slider-heading">Best in Town <span className="d-block">Nigerian Spot</span></h1>
                                            <p className="alt-font slider-para py-2">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.</p>
                                            <a href="#about" className="scroll btn button btn-medium btn-rounded btn-white mb-5">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="bg-overlay bg-black opacity-4"></div>
                            <img src="/vendor/images/vehicle001.jpg" alt="slider" />
                                <div className="container slider-text">
                                    <div className="row">
                                        <div className="col-12 col-md-8 col-lg-7 offset-md-2 offset-lg-3 text-center mb-0 mb-md-5">
                                            <h1 className="main-font slider-heading">Best in Town <span className="d-block">Restaurant</span></h1>
                                            <p className="alt-font slider-para py-2">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.</p>
                                            <a href="#about" className="scroll btn button btn-medium btn-rounded btn-white mb-5">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="bg-overlay bg-black opacity-4"></div>
                            <img src="/vendor/images/jollof002.jpg" alt="slider" />
                                <div className="container slider-text">
                                    <div className="row">
                                        <div className="col-12 col-md-6 text-center text-md-left mb-0 mb-md-5">
                                            <h1 className="main-font slider-heading">Best in Town <span className="d-block">Relaxation spot</span></h1>
                                            <p className="alt-font slider-para py-2">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.</p>
                                            <a href="#about" className="scroll btn button btn-medium btn-rounded btn-white mb-5">LEARN MORE</a>
                                        </div>
                                        <div className="col-12 col-md-6"></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <ul className="social-icons social-icons-simple revicon white d-none d-lg-block">
                    <li className="d-table"><a href="javascript:void(0)" className="social-icon"><i className="fab fa-facebook-f"></i> </a> </li>
                    <li className="d-table"><a href="javascript:void(0)" className="social-icon"><i className="fab fa-twitter"></i> </a> </li>
                    <li className="d-table"><a href="javascript:void(0)" className="social-icon"><i className="fab fa-linkedin-in"></i> </a> </li>
                    <li className="d-table"><a href="javascript:void(0)" className="social-icon"><i className="fab fa-instagram"></i> </a> </li>
                </ul>
            </section>


        </div>
    );
}

export default Home;
