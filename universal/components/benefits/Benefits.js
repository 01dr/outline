/**
 * Created by invader on 06.07.16.
 */

import React from 'react'

import s from './benefits.pcss'
import {Grid, Row, Col} from 'react-flexgrid'

import FaDesktop from 'react-icons/lib/fa/desktop'
import FaPaperPlane from 'react-icons/lib/fa/paper-plane'
import FaAnchor from 'react-icons/lib/fa/anchor'
import FaCogs from 'react-icons/lib/fa/cogs'
import FaGG from 'react-icons/lib/fa/gg'
import FaCode from 'react-icons/lib/fa/code'

export default class Benefits extends React.Component {
    render() {
        return  <div className={s.benefits}>
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <div className={s.head}>
                                    <h2 className={s.title}>Benefits of this App</h2>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>

                            <Col md={4} sm={6}>
                                <div className={s.benefit}>
                                    <div className={s.icon}><i><FaDesktop/></i></div>
                                    <h4 className={s.title}>CROSS PLATFORM SUPPORT</h4>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className={s.benefit}>
                                    <div className={s.icon}><i><FaPaperPlane/></i></div>
                                    <h4 className={s.title}>CROSS PLATFORM SUPPORT</h4>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className={s.benefit}>
                                    <div className={s.icon}><i><FaAnchor/></i></div>
                                    <h4 className={s.title}>CROSS PLATFORM SUPPORT</h4>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className={s.benefit}>
                                    <div className={s.icon}><i><FaCogs/></i></div>
                                    <h4 className={s.title}>CROSS PLATFORM SUPPORT</h4>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className={s.benefit}>
                                    <div className={s.icon}><i><FaGG/></i></div>
                                    <h4 className={s.title}>CROSS PLATFORM SUPPORT</h4>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className={s.benefit}>
                                    <div className={s.icon}><i><FaCode/></i></div>
                                    <h4 className={s.title}>CROSS PLATFORM SUPPORT</h4>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}