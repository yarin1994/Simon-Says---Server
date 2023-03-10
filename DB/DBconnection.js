const mongoose = require("mongoose");

// DataBase connection
class Database {
  constructor(uri) {
    this.uri = uri;
  }
  async connectToDB() {
    console.log("[+] Trying to connect to DB....");
    mongoose.set("strictQuery", false);
    await mongoose
      .connect(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("[+] Successfully connected to database!");
        return mongoose.connection;
      })
      .catch((err) => {
        console.log(`[-] Error connecting to database ${err}`);
        process.exit(1);
      });
  }
}

module.exports = Database;
