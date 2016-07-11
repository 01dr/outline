/**
 * Created by invader on 11.07.16.
 */

import React from 'react'
import {connect} from 'react-redux'
import {dropdownToggle} from '../../../../actions/DropdownActions'

import s from './dropdown.pcss'
import classNames from 'classnames/bind'

import FaAngleDown from 'react-icons/lib/fa/angle-down'

class Dropdown extends React.Component {
    render () {
        let props = this.props;
        const { dispatch } = props;
        let st = classNames.bind(s);
        let dropdown = st({
            dropdown: true,
            open: props.dropdown
        });
        return  <div className={dropdown}>
                    <span className={s.angle}><FaAngleDown/></span>
                    <h4 className={s.title} onClick={() => dispatch(dropdownToggle())}>{this.props.title}</h4>
                    <div className={s.body}>
                        {this.props.children}
                    </div>
                </div>
    }
}

export default connect(store => ({dropdown: store.dropdown}))(Dropdown)