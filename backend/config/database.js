const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;

// DB_URI = mongodb+srv://Meghadri:Meghadri@2002@oagms.ori9jho.mongodb.net/OAGMS?retryWrites=true&w=majority