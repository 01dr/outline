/**
 * Created by invader on 10.07.16.
 */

import React from 'react'

import s from './price.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'
import classNames from 'classnames/bind'

export default class Features extends React.Component {
    render() {
        let st = classNames.bind(s);
        let plan = st({
            plan: true,
            best: true
        });

        return  <div className={s.plans}>
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <div className={s.head}>
                                    <h2 className={s.title}>Plans built for every one</h2>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>

                            <Col md={3}>
                                <a href="javascript:void(0);" className={s.plan}>
                                    <div className={s.price}>
                                        <span>$1</span>
                                        <span className={s.small}>/month</span>
                                    </div>
                                    <h3 className={s.name}>Starter</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                            <Col md={3}>
                                <a href="javascript:void(0);" className={s.plan}>
                                    <div className={s.price}>
                                        <span>$25</span>
                                        <span className={s.small}>/month</span>
                                    </div>
                                    <h3 className={s.name}>Regular</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                            <Col md={3}>
                                <a href="javascript:void(0);" className={plan}>
                                    <div className={s.price}>
                                        <span>$59</span>
                                        <span className={s.small}>/month</span>
                                    </div>
                                    <h3 className={s.name}>Plus</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                            <Col md={3}>
                                <a href="javascript:void(0);" className={s.plan}>
                                    <div className={s.price}>
                                        <span>$125</span>
                                        <span className={s.small}>/month</span>
                                    </div>
                                    <h3 className={s.name}>Enterprise</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}