/**
 * Created by Space Invader on 06.04.2016.
 */

import React from 'react'
import s from './buttons.pcss'
import classNames from 'classnames/bind'

export class PrimaryButton extends React.Component {
    render () {
        return  <button {...this.props} className={s.button}>{this.props.children}</button>
    }
}