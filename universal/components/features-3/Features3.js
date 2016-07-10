/**
 * Created by invader on 10.07.16.
 */

import React from 'react'

import s from './features.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

export default class Features3 extends React.Component {
    render() {
        return  <div className={s.features3}>
                    <div className={s.overlay}></div>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <div className={s.content}>
                                    <div className={s.inner}>
                                        <Row>
                                            <Col md={8} mdOffset={2}>
                                                <div className={s.feature}>
                                                    <h2 className={s.title}>Try Outline App today!</h2>
                                                    <div className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
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