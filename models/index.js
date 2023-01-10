const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose
db.items = require('./items.model');
db.menus = require('./menus.model');
module.exports = db