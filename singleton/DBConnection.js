const DBConnection = {
  connect: () => console.log(`DB ${this.uri} has been connected!`),
  disconnect: () => console.log("DB disconnected"),
};

const singletonDBConnection = Object.freeze(DBConnection);

export default singletonDBConnection();

// with class

/* 
let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error('Only one connection can exist!');
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    this.isConnected = true;
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    this.isConnected = false;
    console.log('DB disconnected');
  }
}

const databaseConnector = Object.freeze(new DBConnection());
const connection = databaseConnector;


*/
