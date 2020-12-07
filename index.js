// IMPORT UTILITY MOD and DATA
const UtilMod = require('./Utilities/');
const {listOfPeopleToFind} = require('./Data/')

// Pass DATA into the findPeople method on UtilMod
const results = UtilMod.findPeople(listOfPeopleToFind);

const {foundPeople, notFoundPeople} = UtilMod.getFromMap(results);

console.log('Searching for person: \n', UtilMod.findPerson('111198098652'))

UtilMod.printPeople(notFoundPeople)
UtilMod.printPeople(foundPeople)
// UtilMod.printPeople(results)

// console.log(Object.getPrototypeOf(results))




