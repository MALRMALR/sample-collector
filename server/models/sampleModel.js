const { Pool } = require('pg')

const PG_URI = 'postgres://yeqqxkgb:Ws0iwpaLQ9gbuN79Gyl3hTb78tApR0dE@kashin.db.elephantsql.com/yeqqxkgb';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
