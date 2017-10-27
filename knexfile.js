module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/ezopstakehome',
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/ezopstakehome',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
