const peopleDatabase = new Map();

// peopleDatabase MAP (FULL DATA [ID => DATA OBJ])
peopleDatabase.set('134098098652', {name: 'Avery', age: 41, occupation: 'Wrestler'});
peopleDatabase.set('787843234223', {name: 'Carvallyo', age: 27, occupation: 'programmer'});
peopleDatabase.set('223565653887', {name: 'Frog', age: 33, occupation: 'repitillian'});
peopleDatabase.set('838298098652', {name: 'Brad', age: 52, occupation: 'Technician'});
peopleDatabase.set('787845555223', {name: 'Mark', age: 13, occupation: 'School Teacher'});
peopleDatabase.set('298921653887', {name: 'Reynold', age: 44, occupation: 'Mechanic'});
peopleDatabase.set('111198098652', {name: 'Chris', age: 21, occupation: 'Repairman'});
peopleDatabase.set('787843222223', {name: 'Manly', age: 27, occupation: 'Artist'});
peopleDatabase.set('223565555555', {name: 'Rock', age: 34, occupation: 'Driver'});

// peopleDatabase IDs
const peopleDatabaseIDs = ['134098098652', '787843234223', '223565653887', '838298098652', '787845555223', '298921653887', '111198098652', '787843222223', '223565555555'];
const customerIDs = new Set(peopleDatabaseIDs); // Remove duplicates by making into SET (this will relate to peopleDatabase)


// LIST OF PEOPLE TO FIND
const listOfPeopleToFind = ['13402352358652', '787232334223', '223565653887', '83829235423552', '787845555223', '298921653887', '111198098652', '78723522223', '2232342345555'];


module.exports = { peopleDatabase, customerIDs, listOfPeopleToFind }