/**
 * Created by invader on 10.07.16.
 */

import React from 'react'

import s from './subscribe.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

import {PrimaryButton} from '../common/buttons/Buttons'

export default class Subscribe extends React.Component {
    render () {
        return  <div className={s.subscribe}>
                    <Grid>
                        <Row>
                            <Col md={3} sm={3}>
                                <div className={s.formGroup}>
                                    <input type="text" className={s.input} placeholder="First name"/>
                                </div>
                            </Col>
                            <Col md={3} sm={3}>
                                <div className={s.formGroup}>
                                    <input type="text" className={s.input} placeholder="Last name"/>
                                </div>
                            </Col>
                            <Col md={3} sm={3}>
                                <div className={s.formGroup}>
                                    <input type="email" className={s.input} placeholder="E-mail"/>
                                </div>
                            </Col>
                            <Col md={3} sm={3}>
                                <div className={s.formGroup}>
                                    <PrimaryButton type="submit">Subscribe</PrimaryButton>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}