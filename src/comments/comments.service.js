const knex = require("../db/connection");

function list() {
  // your solution here
return knex("comments")
  .select("*")
}

function listCommenterCount() {
  // your solution here
}

function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
