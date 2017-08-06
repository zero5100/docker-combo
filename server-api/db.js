const { Pool, Client } = require('pg')
    , _ = require("underscore")._;

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
});

function query(qs) {
  console.log("Running query: ", qs);

  // client.connect();
  return pool.query(qs)
  .then((result) => {
    pool.end();
    return result.rows;
  });
}

function normalizeValue(value) {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
}

function all(table) {
  return query(`SELECT * FROM ${table}`);
}

function clear(table) {
  return query(`DELETE FROM ${table}`);
}

function create(table, params) {
  const assigns = Object.keys(params);
  const values = _.values(params).map((value) => normalizeValue(value));
  return query(`INSERT INTO ${table} (${assigns}) VALUES (${values}) RETURNING *`);
}

function getById(table, id) {
  return query(`SELECT * FROM ${table} WHERE id=${id}`);
}

function update(table, id, params) {
  if (params.id) delete params.id;
  const assigns = Object.keys(params);
  const values = assigns.map((key) => `${key}=${normalizeValue(params[key])}`).join(', ');
  return query(`UPDATE ${table} SET ${values} WHERE id=${id} RETURNING *`);
}

function deleteById(table, id) {
  return query(`DELETE FROM ${table} WHERE id = ${id}`);
}

module.exports.all = all;
module.exports.clear = clear;
module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.getById = getById;
module.exports.update = update;
