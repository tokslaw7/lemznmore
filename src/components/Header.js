import React from "react";

function Header (){
    return (
        <div>
            <header id="home" className="cursor-light">
                <div className="inner-header nav-icon">
                    <div className="main-navigation">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 col-lg-2">
                                    <a className="navbar-brand link scroll" href="#home">
                                        <img src="/vendor/images/lemznmore.png" alt="logo" />
                                    </a>
                                </div>
                                <div className="col-8 col-lg-10 simple-navbar d-flex align-items-center justify-content-end">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <div className="navbar-nav ml-auto d-flex align-items-center">
                                                <a className="nav-link home active link scroll" href="#home">Home</a>
                                                <a className="nav-link link scroll" href="#about">About Us</a>
                                                <a className="nav-link link scroll" href="#menu">Our Menu</a>
                                                <a className="nav-link link scroll" href="#reviews">Reviews</a>
                                                <a className="nav-link link scroll" href="#blog">News & Blog</a>
                                                {/*  <a href="" className="btn button btn-medium btn-rounded btn-transparent ml-0 ml-lg-5" data-animation-duration="500" data-fancybox data-src="#animatedModal">Order Now</a>*/}
                                                <span className="menu-line link"><i aria-hidden="true" className="fa fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="sidemenu_btn link" id="sidemenu_toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>


                <div className="side-menu hidden side-menu-opacity">
                    <div className="bg-overlay"></div>
                    <div className="inner-wrapper">
                        <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                        <div className="container">
                            <div className="row w-100 side-menu-inner-content">
                                <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                    <a href="" className="navbar-brand"><img src="/vendor/images/lemznmore.png" alt="logo" /></a>
                                </div>
                                <div className="col-12 col-lg-8 text-center text-lg-left">
                                    <nav className="side-nav w-100">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#home">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#about">About Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#menu">Our Menu</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#reviews">Reviews</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll" href="#blog">News & Blog</a>
                                            </li>
                                            <li className="get-started-btn">
                                                <a href="" className="btn button btn-medium btn-rounded btn-transparent" data-animation-duration="500" data-fancybox data-src="#animatedModal">Order Now</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-12 col-lg-4 d-flex align-items-center text-center text-lg-left">
                                    <div className="side-footer text-white w-100">
                                        <div className="menu-company-details">
                                            <span>+1 631 123 4567</span>
                                            <span>info@Lemznmore.com</span>
                                        </div>
                                        <ul className="social-icons-simple">
                                            <li><a className="facebook-text-hvr" href="javascript:void(0)"><i className="fab fa-facebook-f"></i> </a> </li>
                                            <li><a className="twitter-text-hvr" href="javascript:void(0)"><i className="fab fa-twitter"></i> </a> </li>
                                            <li><a className="youtube-text-hvr" href="javascript:void(0)"><i className="fab fa-youtube"></i> </a> </li>
                                            <li><a className="instagram-text-hvr" href="javascript:void(0)"><i className="fab fa-instagram"></i> </a> </li>
                                        </ul>
                                        <p className="text-white">&copy; 2021 Lemznmore. Made by Taborg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <a id="close_side_menu" href="javascript:void(0);"></a>

                <div className="quote-content hidden animated-modal" id="animatedModal">
                    <div className="pb-5 text-center">
                        <span className="text-pink font-weight-200 font-20">We are Lemznmore</span>
                        <h2 className="main-font font-weight-600 text-sec mt-2">Place your Order Here</h2>
                    </div>
                    <form className="contact-form" id="modal-contact-form-data">
                        <div className="row">
                            <div className="col-12" id="quote_result"></div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="quote_name" name="quoteName" placeholder="Name" required="" type="text" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="quote_contact" name="userPhone" placeholder="Contact #" required="" type="text" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="quote_email" name="userEmail" placeholder="Email" required="" type="email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="quote_address" name="userAddress" placeholder="City / Block no" required="" type="text"/>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea className="form-control" id="userMessage" name="userMessage"  placeholder="Please explain your order in detail."></textarea>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-check">
                                    <label className="checkbox-lable font-weight-200 font-16">Contact by phone is preferred
                                        <input type="checkbox" />
                                            <span className="checkmark"></span>
                                    </label>
                                </div>
                                <a href="javascript:void(0)" className="btn button btn-medium btn-rounded btn-grey modal_contact_btn" id="quote_submit_btn">Submit Now</a>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default Header;
