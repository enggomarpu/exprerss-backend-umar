const mongoose = require('mongoose');

const connectDB = async () => {

  const conne = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conne.connection.host}`);
}

module.exports = connectDB