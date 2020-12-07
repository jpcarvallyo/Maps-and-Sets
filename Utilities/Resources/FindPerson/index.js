const data = require('../../../Data/')

const findPerson = (id) => {
  const { peopleDatabase, customerIDs } = data;
  const hasId = customerIDs.has(id);
  
  if (hasId) { // If SET hasId 
    const person = peopleDatabase.get(id);  // THEN retrieve data from database with ID 
    person['uid'] = id; // ADD the ID to object so user can see
    return person // Return result
  } else { // ELSE we do not have the ID
    
    return { // Return result
      uid: id,
      inDatabase: hasId
    }
  }
}

module.exports = {
  findPerson
}