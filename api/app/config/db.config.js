// setup database here, change the values to suit your environment
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "anang123",
  DB: "challange6",
  PORT: "5432",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
