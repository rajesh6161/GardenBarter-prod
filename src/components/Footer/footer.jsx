import React from 'react';
import './Footer.css'
import linkedln from '../../assets/linkedln.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import github from '../../assets/github.png'

const Footer = () => {
    return (
        <footer id="footer" className="page-footer font-small blue mb-3" style={{ minHeight: "10vh" }}>
            <div className='footer-wrapper'>
                <div className="footer-left">
                    <div className="footer-contact">
                        <h2>Contact Us</h2>
                        <form className='contact-form'>
                            <div className='contact-detail'>
                                <div className=''>
                                    <input type="text" name="Email" id="Email-id" placeholder=' Email-ID' />
                                    <textarea name="message" id="message" placeholder=' Type your query here' />
                                </div>
                                <div className='qbtn'>
                                    <button className='btn btn-light'>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-right">
                    <div style={{ padding: "4%" }}>
                        <h2 className='text-center'>Social Links</h2>
                        <div className="social-media">
                            <a href="https://www.linkedin.com/company/packt-publishing/"><img src={linkedln} alt="" /></a>
                            <a href="https://twitter.com/PacktPub?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={twitter} alt="" /></a>
                            <a href="https://www.facebook.com/PacktPub/"><img src={facebook} alt="" /></a>
                            <a href="https://www.youtube.com/user/packt1000/featured"><img src={youtube} alt="" /></a>
                            <a href="https://github.com/PacktPublishing"><img src={github} alt="" /></a>
                        </div>
                    </div>
                    <div className="columns">
                        <div className='column-1'>
                            <a href="/">About Us</a><br />
                            <a href="/"> Contact Us</a><br />
                            <a href="#">Help Desk</a>
                        </div>
                        <div className='column-2'>
                            <a href="/"> Site Map</a><br />
                            <a href="https://apply.workable.com/packtpublishing/?lng=en"> Careers</a><br />
                            <a href="#">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p> &copy; GardenBarter</p>
            </div>

        </footer >
    );
};

export default Footer;
