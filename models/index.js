const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose
db.items = require('./catalog.models');
module.exports = db