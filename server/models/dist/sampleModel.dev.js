"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

var PG_URI = 'postgres://yeqqxkgb:Ws0iwpaLQ9gbuN79Gyl3hTb78tApR0dE@kashin.db.elephantsql.com/yeqqxkgb';
var pool = new Pool({
  connectionString: PG_URI
});
module.exports = {
  query: function query(text, params, callback) {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};