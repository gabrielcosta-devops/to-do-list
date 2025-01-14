const app = require('./app');
const { sequelize } = require('./utils/db');

const PORT = process.env.PORT || 3001;

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Unable to connect to the database:', err));