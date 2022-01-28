import React from "react";


function About (){
    return (
        <div>
            <section className="about" id="about" >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 text-center wow fadeIn"
                             style={{visibility: "visible", animationName: "fadeIn"}}>
                            <div className="heading-area d-inline-block">
                                <div className="mb-4"><img src="/vendor/images/about-border.png" alt="About-line" /></div>
                                <h6 className="sub-title alt-font text-sec">Top quality Meal</h6>
                                <h2 className="title main-font text-main my-4">Lemzn'more Restuarant & Bar</h2>
                                <p className="paragraph alt-font text-sec">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-5 mb-lg-0 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="row app-feature">
                                <div className="col-12 col-lg-2 p-lg-0">
                                    <i className="lni lni-coffee-cup" />
                                </div>
                                <div className="col-12 col-lg-10 p-lg-0">
                                    <h4 className="mb-3">We are food lovers</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.</p>
                                </div>
                            </div>
                            <div className="row app-feature">
                                <div className="col-12 col-lg-2 p-lg-0">
                                    <i className="lni lni-fresh-juice" />
                                </div>
                                <div className="col-12 col-lg-10 p-lg-0">
                                    <h4 className="mb-3">Diversity in food</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.</p>
                                </div>
                            </div>
                            <div className="row app-feature">
                                <div className="col-12 col-lg-2 p-lg-0">
                                    <i className="lni lni-emoji-smile"></i>
                                </div>
                                <div className="col-12 col-lg-10 p-lg-0">
                                    <h4 className="mb-3">100% Free Delivery</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                            <div className="app-image">
                                <img src="/vendor/images/about-img.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="row app-feature">
                                <div className="col-12 col-lg-2 p-lg-0">
                                    < i className="lni lni-coffee-cup" />
                                </div>
                                <div className="col-12 col-lg-10 p-lg-0">
                                    <h4 className="mb-3">We are food lovers</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.</p>
                                </div>
                            </div>
                            <div className="row app-feature">
                                <div className="col-12 col-lg-2 p-lg-0">
                                    < i className="lni lni-juice"/>
                                </div>
                                <div className="col-12 col-lg-10 p-lg-0">
                                    <h4 className="mb-3">Diversity in food</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.</p>
                                </div>
                            </div>
                            <div className="row app-feature">
                                <div className="col-12 col-lg-2 p-lg-0">
                                    <i className="lni lni-emoji-smile"/>
                                </div>
                                <div className="col-12 col-lg-10 p-lg-0">
                                    <h4 className="mb-3">100% Free Delivery</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim viverra ultrices.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </div>
    );
}


export default About;
