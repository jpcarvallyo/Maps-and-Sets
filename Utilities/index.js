// Import all the Resources
const {findPerson} = require('./Resources/FindPerson/')
const {findPeople} = require('./Resources/FindPeople/')
const {printPeople} = require('./Resources/PrintPeople/')
const {getFromMap} = require('./Resources/GetFromMap/')

// Expose all Resources as methods on Utilities MODULE
module.exports = {
  printPeople,
  findPerson,
  findPeople,
  getFromMap
}