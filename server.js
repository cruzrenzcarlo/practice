// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const port = process.env.PORT || 7000;

// // const uri = process.env.ATLAS_URI;
// const uri = "mongodb+srv://newuser01:1234@cluster0.7xf1ace.mongodb.net/test";
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// app.get('/', (req, res) => {
//     const newRecord = {
//         name: "Renz Cruz",
//         sid: "1234"
//     };

//     db.collection('records').insertOne(newRecord, function(err, result){
//         if (err) throw err;
//         res.send({
//             entry,
//             result
//         })
//     })
// })

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });
//this is my working model
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 7000;

const uri = "mongodb+srv://newuser01:12345@cluster0.7xf1ace.mongodb.net/test";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Define a Mongoose schema for the "records" collection
const recordSchema = new mongoose.Schema({
  name: String,
  sid: String
});

// Create a Mongoose model for the "records" collection
const Record = mongoose.model('Record', recordSchema);

app.get('/', async (req, res) => {
  const newRecord = {
    name: "Renz Cruz",
    sid: "1234"
  };

  try {
    // Insert the new record into the "records" collection using the Mongoose model
    const result = await Record.create(newRecord);
    res.send({
      entry: newRecord,
      result
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while inserting the record.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
//this is my working model end

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const port = process.env.PORT || 7000;

// const uri = "mongodb+srv://newuser01:1234@cluster0.7xf1ace.mongodb.net/test";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// });

// // Middleware to parse the request body as JSON
// app.use(express.json());

// // Define a Mongoose schema for the "records" collection
// const recordSchema = new mongoose.Schema({
//   name: String,
//   sid: String
// });

// // Create a Mongoose model for the "records" collection
// const Record = mongoose.model('Record', recordSchema);

// // POST route to insert a new record
// app.post('/', async (req, res) => {
//   const newRecord = {
//     name: "renz",
//     sid: "1234"
//   };

//   try {
//     // Insert the new record into the "records" collection using the Mongoose model
//     const result = await Record.create(newRecord);
//     res.send({
//       entry: newRecord,
//       result
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error occurred while inserting the record.");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });