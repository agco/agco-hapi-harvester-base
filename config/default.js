module.exports = {
  server: {
    port: process.env.PORT || 9000
  },
  db: {
    mongodbUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/test',
    oplogConnectionString: process.env.MONGODB_OPLOG_URL || 'mongodb://localhost:27017/local'
  }
};
