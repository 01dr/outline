/**
 * Created by invader on 11.07.16.
 */

import {DROPDOWN} from '../actions/constants'

function dropdown(state = false, action) {

    switch (action.type) {
        case DROPDOWN:
            if (state) {
                return false;
            } else {
                return true;
            }

        default:
            return state;
    }
}

export default {dropdown}