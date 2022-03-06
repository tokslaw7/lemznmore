import React from "react";

function MyFooter (){
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <div className="footer-social">
                                <ul className="list-unstyled social-icons social-icons-simple">
                                    <li><a className="social-icon wow fadeInUp" href="javascript:void(0)"><i className="fab fa-facebook-f" aria-hidden="true"></i> </a> </li>
                                    <li><a className="social-icon wow fadeInDown" href="javascript:void(0)"><i className="fab fa-twitter" aria-hidden="true"></i> </a> </li>
                                    <li><a className="social-icon wow fadeInUp" href="javascript:void(0)"><i className="fab fa-google-plus-g" aria-hidden="true"></i> </a> </li>
                                    <li><a className="social-icon wow fadeInDown" href="javascript:void(0)"><i className="fab fa-linkedin-in" aria-hidden="true"></i> </a> </li>
                                    <li><a className="social-icon wow fadeInUp" href="javascript:void(0)"><i className="fab fa-instagram" aria-hidden="true"></i> </a> </li>
                                    <li><a className="social-icon wow fadeInUp" href="javascript:void(0)"><i className="fab fa-pinterest-p" aria-hidden="true"></i> </a> </li>
                                </ul>
                            </div>
                            <p className="company-about fadeIn text-white">© 2022 Lemzn'more. Made By <a href="javascript:void(0);">Taborg LLC</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MyFooter;