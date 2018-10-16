'use strict';

const knex = require('../knex');

// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

let id = 1000;
knex('notes')
  .select()
  .where({ id })
  .then(results => console.log(results[0]));

// Update Note By Id accepts an ID and an object with the desired updates. It returns the updated note as an object
let updateObj = {title: 'hey Im a abig title', content: 'and I a cohhhntent'};
knex('notes')
  .where({ id })
  .update(updateObj)
  .returning('*')
  .then(results => {
    console.log(results[0]); 
  }
  );

let newItem = {title: 'hey Im a new title', content: 'and Im the new content'};
// Create a Note accepts an object with the note properties and inserts it in the DB. It returns the new note (including the new id) as an object.
knex('notes')
  .insert(newItem)
  .returning('*')
  .then(results => {
    console.log(results[0]);
  });


// Delete Note By Id accepts an ID and deletes the note from the DB.

let deleteID = 1001;
id = deleteID;
knex('notes')
  .where({ id })
  .del();