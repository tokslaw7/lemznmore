import React from "react";


function Reviews (){
    return (
        <div>

            <section className="reviews" id="reviews">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 wow fadeInLeft order-2 order-md-1 pt-5 pt-md-0" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="reviews-img">
                                <img src="/vendor/images/friedfish001.jpg" alt="Testimonial" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 wow fadeInRight order-1 order-md-2" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="heading-area text-center">
                                <div className="mb-4"><img src="/vendor/images/gallery-border.png" alt="About-line" /></div>
                                <h2 className="title main-font text-main my-4">Food and Sport Lovers</h2>
                            </div>
                            <div className="testimonial-carousel">
                                <div className="testimonial-box owl-carousel owl-theme">
                                    <div className="item text-center animate-fade">
                                        <div className="icon-holder"><i className="fas fa-quote-right"></i></div>
                                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo.</p>
                                        <div className="img-holder"><img src="/vendor/images/review-1.jpg" alt="Image" /></div>
                                        <h4 className="user-name">Sara Williams</h4>
                                    </div>
                                    <div className="item text-center animate-fade">
                                        <div className="icon-holder"><i className="fas fa-quote-right"></i></div>
                                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo.</p>
                                        <div className="img-holder"><img src="/vendor/images/review-2.jpg" alt="Image"/></div>
                                        <h4 className="user-name">Steve Smith</h4>
                                    </div>
                                    <div className="item text-center animate-fade">
                                        <div className="icon-holder"><i className="fas fa-quote-right"></i></div>
                                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo.</p>
                                        <div className="img-holder"><img src="/vendor/images/review-3.jpg" alt="Image"/></div>
                                        <h4 className="user-name">Mandy Rose</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reviews;