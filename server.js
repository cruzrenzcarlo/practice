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
const port = 7000;

const uri = "mongodb+srv://newuser01:12345@cluster0.7xf1ace.mongodb.net/Exam";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Define a Mongoose schema for the "records" collection
const quiz = new mongoose.Schema({
  name: String,
  sid: Number
});

// Create a Mongoose model for the "records" collection
const quizes = mongoose.model('quizes', quiz);

// app.get('/', async (req, res) => {
//   const newQuizes = {
//     name: "Renz Cruz",
//     sid: 300361745
//   };

//   try {
//     // Insert the new record into the "records" collection using the Mongoose model
//     const result = await quizes.create(newQuizes);
//     res.send({
//       entry: newQuizes,
//       result
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error occurred while inserting the record.");
//   }
// });

// app.get('/', (req, res) => {
//   const newQuizes = {
//     name: "Renz Cruz",
//     sid: 300361745
//   };

//   try {
//     // Insert the new record into the "records" collection using the Mongoose model
//     const result =  quizes.create(newQuizes);
//     res.send({
//       entry: newQuizes,
//       result
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error occurred while inserting the record.");
//   }
// });

app.get('/', (req, res) => {
  const newQuizes = new quizes ({
    name: "Renz Cruz",
    sid: 300361745
  });

    // Insert the new record into the "records" collection using the Mongoose model
    // const result = quizes.create(newQuizes);
    quizes.insertMany([newQuizes]).then(r=>res.json(r));

});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
//this is my working model end
