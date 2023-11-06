const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('Escuchando en el puerto 3001 Harry'); // eslint-disable-line no-console
  });
});