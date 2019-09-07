import React, {Component} from 'react';

class About extends Component{
render(){ 
    return(
<section id="about">
    <div className="container">
        <div className="row align-items-center wow fadeIn">
            <div className="col-md-6">
                <div className="title">
                        <h6 className="third-color mb-3">Basic info about componay</h6>
                        <h2>Wexim - A Creative Design Agency in NewYork, USA</h2>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                    <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.
                       <br /><br />
                        Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. </p>
                </div>
        </div>

        <div className="row mt-lg-5">
            <div className="col-md-4 wow fadeInLeft">
                <div className="feature-box">
                    <span className="item-number gradient-text1">
                        01.
                    </span>
                    <h6 className="mb-4">Website Design</h6>
                    <p>Lorem ipsum dolor  amet, consectetur adipiscing elit augue diam, accumsan  ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
                <div className="feature-box">
                    <span className="item-number gradient-text1">
                        02.
                    </span>
                    <h6 className="mb-4">Website Development</h6>
                    <p>Lorem ipsum dolor  amet, consectetur adipiscing elit augue diam, accumsan  ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
            </div>
            <div className="col-md-4 wow fadeInRight">
                <div className="feature-box">
                    <span className="item-number gradient-text1">
                        03.
                    </span>
                    <h6 className="mb-4">Project Management</h6>
                    <p>Lorem ipsum dolor  amet, consectetur adipiscing elit augue diam, accumsan  ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
            </div>
        </div>

       
        <div className="row laptop text-center">
            <div className="col-md-12">
                <div className="laptop-img wow fadeInUp">
                    <img src="http://themesindustry.com/html/wexim-2019/images/laptop-img.png" alt="laptop" />
                    <div id="laptop-slide" className="owl-carousel owl-theme">
                        <div className="item">
                            <img src="http://themesindustry.com/html/wexim-2019/images/laptop-slide-img1.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="http://themesindustry.com/html/wexim-2019/images/laptop-slide-img2.jpg" alt="" />
                        </div>
                        <div className="item">
                            <img src="http://themesindustry.com/html/wexim-2019/images/laptop-slide-img3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

        
    );      

}
}
export default About;