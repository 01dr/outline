/**
 * Created by invader on 06.07.16.
 */

import React from 'react'

import s from './main.pcss'

import Partners from '../../components/partners/Partners'
import Features from '../../components/features/Features'
import Counter from '../../components/counter/Counter'
import Benefits from '../../components/benefits/Benefits'

export default class Main extends React.Component {
    render() {
        return  <div>
                    <Partners/>
                    <Features/>
                    <Counter/>
                    <Benefits/>
                </div>
    }
}