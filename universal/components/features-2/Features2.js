/**
 * Created by invader on 10.07.16.
 */

import React from 'react'

import s from './features.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

import MdDesktop from 'react-icons/lib/md/desktop-mac'
import MdWallet from 'react-icons/lib/md/account-balance-wallet'
import MdCamera from 'react-icons/lib/md/camera'
import MdWeekend from 'react-icons/lib/md/weekend'
import iphoneImg from './images/iphone_blank_2.png'

export default class Features2 extends React.Component {
    render () {
        return  <div className={s.features2}>
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <div className={s.head}>
                                    <h2 className={s.title}>Explore amazing features</h2>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </Col>

                            <Col md={4}>
                                <Row>
                                    <Col md={12} sm={6} xs={6}>
                                        <div className={s.feature}>
                                            <div className={s.icon}><i><MdDesktop/></i></div>
                                            <h4 className={s.title}>CROSS PLATFORM SUPPORT</h4>
                                            <p className={s.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={6} xs={6}>
                                        <div className={s.feature}>
                                            <div className={s.icon}><i><MdWallet/></i></div>
                                            <h4 className={s.title}>PROTOTYPING TOOLS</h4>
                                            <p className={s.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <div className={s.phone}>
                                    <img src={iphoneImg}/>
                                </div>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col md={12} sm={6} xs={6}>
                                        <div className={s.feature}>
                                            <div className={s.icon}><i><MdCamera/></i></div>
                                            <h4 className={s.title}>POWERFUL DESIGN</h4>
                                            <p className={s.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={6} xs={6}>
                                        <div className={s.feature}>
                                            <div className={s.icon}><i><MdWeekend/></i></div>
                                            <h4 className={s.title}>USER COLLABORATION</h4>
                                            <p className={s.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}