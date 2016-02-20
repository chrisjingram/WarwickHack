module.exports ={
  mongo: {
    url: "mongodb://localhost:27017/warwickhack",
    //url: "mongodb://localhost:27017/movemore",
    options: {
      user: "",
      pass: "",
      server: {
        auto_reconnect: true,
        socketOptions: {
          keepAlive: 1,
          connectTimeoutMS: 3000
        }
      },
      replset: {
        socketOptions: {
          keepAlive: 1,
          connectTimeoutMS: 3000
        }
      }
    }
  }

} 