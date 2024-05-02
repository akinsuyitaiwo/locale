import  { Sequelize } from 'sequelize';
import config from "./index"


const sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'mysql'
});


export default sequelize