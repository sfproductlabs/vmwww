import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/mobile.jpg'
import pic02 from '../assets/images/empty-pills.jpg'
import pic03 from '../assets/images/mail.jpg'
import pic04 from '../assets/images/barcode.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Valid9.com - Fighting fake and counterfeit products";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                
                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Our solution to fake pharmaceuticals, electronics, and everything else big or small.</h2>
                            </header>
                            <p>From manufacturer to consumer, no two products are alike. We stop counterfeits dead in their tracks. Identify locations where fakes occur. Help you understand your consumer better. Improve the after-market value of your products, and help you realize value from their sale. </p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Assign a Tracking Code</h3>
                            <p>A unique tracking code is applied to the container of pills, and even the pills themselves. <strong>Try it now:</strong></p>
                            <span className="image fit"><img src="https://api.staging.validmeds.com/api/v1/test/issue/Aspirin" style={{ borderRadius:0, borderWidth:0}}/></span>
                            <ul className="actions">
                                {/* <li><a href="#" className="button">More</a></li> */}
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Distribute as Normal</h3>
                            <p>Every other step of the logistics and value chain is unchanged, and non-counterfeitable.</p>
                            <ul className="actions">
                                {/* <li><a href="#" className="button">More</a></li> */}
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Consumer Check</h3>
                            <p>The consumer checks for the uniqueness of the medicines using our patented and easy to use system.</p>
                            <ul className="actions">
                                {/* <li><a href="mailto:andrew@valid9.com" className="button">More</a></li> */}
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                {/* <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li> */}
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Open Source, <br />
                                Patented technology</h2>
                            </header>
                            <p>We have patented a method which we hope will open up the world of anti-counterfeit pharmaceuticals.</p>
                            <p>We hope that we can get the support of the pharmaceutical industry as a whole. That's why open source is core to our technology. It's in everybody's interest to ensure people are getting what they pay for. We want to make it as easy as possible to deliver medicines with our system.</p>
                            <p>We are looking for interested parties in government, divisions of pharmaceutical manufacturers, and existing supply chain providers in the pharmaceutical industry to partner with us.</p>
                        </div>
                    </div>
                </section>               

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Want to join our beta?</h2>
                        </header>
                        <p>Contact us.</p>
                        <ul className="actions uniform">
                            {/* <li><a href="#" className="button special">Sign Up</a></li> */}
                            <li><a href="mailto:andrew@valid9.com" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
