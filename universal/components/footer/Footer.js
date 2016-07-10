/**
 * Created by invader on 10.07.16.
 */

import React from 'react'

import s from './footer.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook-official'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaDribbble from 'react-icons/lib/fa/dribbble'
import FaYoutube from 'react-icons/lib/fa/youtube-play'

export default class Footer extends React.Component {
    render () {
        return  <footer className={s.footer}>
                    <div className={s.overlay}></div>
                    <div className={s.content}>
                        <Grid>
                            <Row>
                                <Col md={3} sm={4}>
                                    <div className={s.logo}>
                                        <a href="javascript:void(0);">Outline</a>
                                    </div>
                                    <div className={s.copyright}>
                                        <small>
                                            © 2015. All Rights Reserved.<br/>
                                            by <a href="javascript:void(0);">FREEHTML5.co</a> & <a href="javascript:void(0);">Amazing Space Invader</a><br/>
                                            images: <a href="javascript:void(0);">Pexels</a>
                                        </small>
                                    </div>
                                    <div className={s.social}>
                                        <a href="javascript:void(0);"><i><FaTwitter/></i></a>
                                        <a href="javascript:void(0);"><i><FaFacebook/></i></a>
                                        <a href="javascript:void(0);"><i><FaInstagram/></i></a>
                                        <a href="javascript:void(0);"><i><FaDribbble/></i></a>
                                        <a href="javascript:void(0);"><i><FaYoutube/></i></a>
                                    </div>
                                </Col>
                                <Col md={3} sm={4}>
                                    <h3 className={s.title}>ABOUT</h3>
                                    <ul className={s.menu}>
                                        <li><a href="javascript:void(0);">Tour</a></li>
                                        <li><a href="javascript:void(0);">Company</a></li>
                                        <li><a href="javascript:void(0);">Jobs</a></li>
                                        <li><a href="javascript:void(0);">Blog</a></li>
                                        <li><a href="javascript:void(0);">New Features</a></li>
                                        <li><a href="javascript:void(0);">Contact Us</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={4}>
                                    <h3 className={s.title}>TOUR</h3>
                                    <ul className={s.menu}>
                                        <li><a href="javascript:void(0);">Help Center</a></li>
                                        <li><a href="javascript:void(0);">Terms of Service</a></li>
                                        <li><a href="javascript:void(0);">Security</a></li>
                                        <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0);">Careers</a></li>
                                        <li><a href="javascript:void(0);">More Apps</a></li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={12}>
                                    <h3 className={s.title}>MORE LINKS</h3>
                                    <ul className={s.menu}>
                                        <li><a href="javascript:void(0);">Feedback</a></li>
                                        <li><a href="javascript:void(0);">Frequently Ask Questions</a></li>
                                        <li><a href="javascript:void(0);">Terms of Service</a></li>
                                        <li><a href="javascript:void(0);">Privacy Policy</a></li>
                                        <li><a href="javascript:void(0);">Careers</a></li>
                                        <li><a href="javascript:void(0);">More Apps</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </footer>
    }
}
