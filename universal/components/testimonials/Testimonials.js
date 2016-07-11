/**
 * Created by invader on 11.07.16.
 */

import React from 'react'

import s from './testimonials.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

import Carousel from 'react-slick'
import './lib/slick.css'

import user1img from './images/user.jpg'
import user2img from './images/user_2.jpg'
import user3img from './images/user_3.jpg'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

export default class Testimonials extends React.Component {
    render () {
        let carouselSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <FaAngleRight/>,
            prevArrow: <FaAngleLeft/>
        }

        return  <div className={s.testimonials}>
                    <Grid>
                        <Row>
                            <Col lg={12}>
                                <Carousel {...carouselSettings}>
                                    <div className={s.testi}>
                                        <Row>
                                            <Col md={3} sm={3} xs={4}>
                                                <figure>
                                                    <img src={user1img}/>
                                                </figure>
                                            </Col>
                                            <Col md={9} sm={9} xs={8}>
                                                <blockqoute>
                                                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                                </blockqoute>
                                                <div className={s.author}>
                                                    <span className={s.name}>Gustav Barrow</span>, XYZ inc.
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className={s.testi}>
                                        <Row>
                                            <Col md={3} sm={3} xs={4}>
                                                <figure>
                                                    <img src={user2img}/>
                                                </figure>
                                            </Col>
                                            <Col md={9} sm={9} xs={8}>
                                                <blockqoute>
                                                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                                </blockqoute>
                                                <div className={s.author}>
                                                    <span className={s.name}>Gustav Barrow</span>, XYZ inc.
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className={s.testi}>
                                        <Row>
                                            <Col md={3} sm={3} xs={4}>
                                                <figure>
                                                    <img src={user3img}/>
                                                </figure>
                                            </Col>
                                            <Col md={9} sm={9} xs={8}>
                                                <blockqoute>
                                                    <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                                </blockqoute>
                                                <div className={s.author}>
                                                    <span className={s.name}>Gustav Barrow</span>, XYZ inc.
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Carousel>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}