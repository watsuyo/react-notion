
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-notion-sushi.cjs.production.min.js')
} else {
  module.exports = require('./react-notion-sushi.cjs.development.js')
}
