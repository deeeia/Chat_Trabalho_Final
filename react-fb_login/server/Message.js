const mongoose = require('mongoose')
const {Schema} = require('./config/conexao')

const messages = new mongoose.Schema({
  sender: String,
  body: String,
})

const model = mongoose.model('Message', messages)

module.exports = model