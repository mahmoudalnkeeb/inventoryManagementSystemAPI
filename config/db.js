const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
console.log(`${process.env.DB_USER}:${process.env.DB_PASS}`);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gvujt.mongodb.net/inventory_management_system?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
