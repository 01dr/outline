/**
 * Created by invader on 06.07.16.
 */

import React from 'react'

import s from './main.pcss'

import Partners from '../../components/partners/Partners'
import Features from '../../components/features/Features'
import Features2 from '../../components/features-2/Features2'
import Counter from '../../components/counter/Counter'
import Products from '../../components/products/Products'
import Benefits from '../../components/benefits/Benefits'
import Features3 from '../../components/features-3/Features3'
import Price from '../../components/price/Price'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'

export default class Main extends React.Component {
    render() {
        return  <div>
                    <div className={s.pageWrapper}>
                        <Partners/>
                        <Features/>
                        <Features2/>
                        <Counter/>
                        <Products/>
                        <Benefits/>
                        <Features3/>
                        <Price/>
                        <Subscribe/>
                    </div>
                    <Footer/>
                </div>
    }
}