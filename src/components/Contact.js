import React from "react";

function Contact (){
    return (
        <div>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 pl-md-0 wow fadeInLeft order-2 order-md-1 padding-top" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="mapouter" style={{backgroundColor:"red"}}>
                                <div id="map" className="full-map bg-img-map"></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 pr-md-0 wow fadeInRight order-1 order-md-2" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="heading-area">
                                <div className="mb-4"><img src="/vendor/images/gallery-border.png" alt="Border" /></div>
                                <h2 className="title main-font text-main mb-2">Place your order</h2>
                            </div>
                            <form className="contact-form" id="contact-form-data">
                                <div id="result"></div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Your Name" required="" id="your_name" name="userName" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Email" required="" id="your_email" name="userEmail" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Contact" required="" id="your_contact" name="contact" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Meal Details" id="message" name="userMessage"></textarea>
                                </div>
                                <a href="javascript:void(0);" id="submit_btn" className="contact_btn btn button btn-medium btn-rounded btn-grey w-100 d-block mt-5">Send Message</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;
