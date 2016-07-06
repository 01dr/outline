/**
 * Created by invader on 06.07.16.
 */

if (__DEV__) {
    module.exports = require('./root.dev');
} else {
    module.exports = require('./root.prod');
}