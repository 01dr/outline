/**
 * Created by invader on 10.07.16.
 */

import React from 'react'

import s from './products.pcss'
import {Grid, Row, Col} from 'react-flexgrid'
import 'react-flexgrid/lib/flexgrid.css'

import MdMoneyOff from 'react-icons/lib/md/money-off'
import MdiPhone from 'react-icons/lib/md/phone-iphone'
import MdComputer from 'react-icons/lib/md/computer'
import MdCloudDownload from 'react-icons/lib/md/cloud-download'
import product1img from './images/product_1.jpg'
import product2img from './images/product_2.jpg'
import product3img from './images/product_3.jpg'
import product4img from './images/product_4.jpg'

export default class Features extends React.Component {
    render() {
        return  <div className={s.products}>
                    <Grid>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <div className={s.head}>
                                    <h2 className={s.title}>Other awesome Apps</h2>
                                    <p className={s.subtitle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </Col>

                            <Col md={3} sm={6} xs={6}>
                                <a href="javascript:void(0);" className={s.product}>
                                    <figure><img src={product1img}/></figure>
                                    <h3 className={s.title}>Product name</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <a href="javascript:void(0);" className={s.product}>
                                    <figure><img src={product2img}/></figure>
                                    <h3 className={s.title}>Product name</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <a href="javascript:void(0);" className={s.product}>
                                    <figure><img src={product3img}/></figure>
                                    <h3 className={s.title}>Product name</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                            <Col md={3} sm={6} xs={6}>
                                <a href="javascript:void(0);" className={s.product}>
                                    <figure><img src={product4img}/></figure>
                                    <h3 className={s.title}>Product name</h3>
                                    <p className={s.text}>Far far away, behind the word mountains</p>
                                </a>
                            </Col>
                        </Row>
                    </Grid>
                </div>
    }
}