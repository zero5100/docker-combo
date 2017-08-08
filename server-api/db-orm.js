const Sequelize = require('sequelize');

module.exports.create = create;

function create(connectionString) {

  // Or you can simply use a connection uri
  const sequelize = new Sequelize(connectionString);

  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const People = sequelize.define('people', {
    name: Sequelize.STRING,
    birthday: Sequelize.DATE
  });

  return People.sync({force: true})
  .then(() => {
    return People.create({
      name: 'JOHN CENAAAAAAAaaaa',
      birthday: new Date(1980, 6, 20)
    });
  })
  .then((newPerson) => {
    console.log(newPerson.get({
      plain: true
    }));
  });
}

