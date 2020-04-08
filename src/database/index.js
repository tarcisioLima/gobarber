import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';
import mongoose from 'mongoose';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    try {
      this.mongoConnection = mongoose.connect(
        'mongodb://localhost:27017/gobarber',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: true,
        }
      );
    } catch (err) {
      console.log('Mongo connection fail: ', err);
    }
  }
}

export default new Database();
