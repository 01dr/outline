/**
 * Created by invader on 06.07.16.
 */

import React from 'react'

import s from './features.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

import MdMoneyOff from 'react-icons/lib/md/money-off'
import MdiPhone from 'react-icons/lib/md/phone-iphone'
import MdComputer from 'react-icons/lib/md/computer'
import MdCloudDownload from 'react-icons/lib/md/cloud-download'

export default class Features extends React.Component {
    render() {
        return  <div className={s.features}>
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <div className={s.head}>
                                    <h2 className={s.title}>Explore amazing features</h2>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <div className={s.feature}>
                                    <span className={s.icon}><i><MdMoneyOff/></i></span>
                                    <h3 className={s.title}>100% free</h3>
                                    <p className={s.text}>Far far away behind the world mountains</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <div className={s.feature}>
                                    <span className={s.icon}><i><MdiPhone/></i></span>
                                    <h3 className={s.title}>Fully responsive</h3>
                                    <p className={s.text}>Far far away behind the world mountains</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <div className={s.feature}>
                                    <span className={s.icon}><i><MdComputer/></i></span>
                                    <h3 className={s.title}>Retina ready</h3>
                                    <p className={s.text}>Far far away behind the world mountains</p>
                                </div>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <div className={s.feature}>
                                    <span className={s.icon}><i><MdCloudDownload/></i></span>
                                    <h3 className={s.title}>Download</h3>
                                    <p className={s.text}>Far far away behind the world mountains</p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}