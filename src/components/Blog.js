import React from "react";

function Blog (){
    return (
        <div>
            <section className="blog py-0" id="blog">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".8s">
                        <div className="blog-context text-white">
                            <span className="d-block alt-font font-weight-normal pb-2">Dec 14, 2020</span>
                            <h2 className="main-font">Blogs</h2>
                            <p>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.</p>
                            <a href="/vendor/standalone.html" className="btn button btn-medium btn-rounded btn-transparent mb-5">Read Blog</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 blog-background wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s"></div>
                </div>
            </section>
        </div>
    );
}

export default Blog;
