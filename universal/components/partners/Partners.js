/**
 * Created by invader on 06.07.16.
 */

import React from 'react'

import s from './partners.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

import client1 from './images/client_1.png'
import client2 from './images/client_2.png'
import client3 from './images/client_3.png'
import client4 from './images/client_4.png'

export default class Partners extends React.Component {
    render() {
        return  <div className={s.partners}>
                    <Grid>
                        <Row>
                            <Col xs={6} sm={6} md={3}>
                                <figure className={s.client}>
                                    <img src={client1} alt="Square"/>
                                </figure>
                            </Col>
                            <Col xs={6} sm={6} md={3}>
                                <figure className={s.client}>
                                    <img src={client2} alt="Airbnb"/>
                                </figure>
                            </Col>
                            <Col xs={6} sm={6} md={3}>
                                <figure className={s.client}>
                                    <img src={client3} alt="Evernote"/>
                                </figure>
                            </Col>
                            <Col xs={6} sm={6} md={3}>
                                <figure className={s.client}>
                                    <img src={client4} alt="Pinterest"/>
                                </figure>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}