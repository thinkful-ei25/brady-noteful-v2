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


let updateObj = {title: 'hey Im a abig title', content: 'and I a cohhhntent'};
knex('notes')
  .where({ id })
  .update(updateObj)
  .returning(['id', 'title', 'content'])
  .then(results => {
    console.log(results); 
  }
  )
  .catch(err => {
    console.error(err);
  });





// Update Note By Id accepts an ID and an object with the desired updates. It returns the updated note as an object

// Create a Note accepts an object with the note properties and inserts it in the DB. It returns the new note (including the new id) as an object.
// Delete Note By Id accepts an ID and deletes the note from the DB.