const { findPerson } = require('../FindPerson/')


const findPeople = (arrayOfIDs) => {
  const peopleMap = new Map();
  peopleMap.set('foundPeople', new Set());
  peopleMap.set('notFoundPeople', new Set());
  const notFoundPeople = peopleMap.get('notFoundPeople');
  const foundPeople = peopleMap.get('foundPeople');
  // console.log(foundPeople)
  // Take arrayOfIDs and reduce to an OBJ with two properties (foundPeople and notFoundPeople)
  arrayOfIDs.reduce((accum, curr) => {
    // Each time loop iterates, run the findPerson function on the CURRENT item in the loop.
    const currPersonVal = findPerson(curr);
    // Take result of that and pass into an IF condition
    // If the CURRENT item 
    // console.log(currPersonVal)
    if (currPersonVal.inDatabase !== false) {
      foundPeople.add(currPersonVal)
    } else {
      notFoundPeople.add(currPersonVal)
    }
    return accum
  }, peopleMap)

  // Return result
  return peopleMap
}

module.exports = {
  findPeople
}