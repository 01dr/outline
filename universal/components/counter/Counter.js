/**
 * Created by invader on 06.07.16.
 */

import React from 'react'

import s from './counter.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

export default class Counter extends React.Component {
    render() {
        return  <div className={s.counter}>
                    <div className={s.overlay}></div>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <div className={s.content}>
                                    <div className={s.inner}>
                                        <Row>
                                            <Col md={4}>
                                                <div className={s.count}>
                                                    <div className={s.number}>28</div>
                                                    <div className={s.label}>CUSTOMERS</div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={s.count}>
                                                    <div className={s.number}>57</div>
                                                    <div className={s.label}>COMPLETED APPS</div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className={s.count}>
                                                    <div className={s.number}>34023</div>
                                                    <div className={s.label}>DOWNLOADS</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}