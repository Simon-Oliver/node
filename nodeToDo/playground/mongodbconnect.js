const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne(
      {
        text: 'This is a test ToDo',
        completed: false
      },
      (err, result) => {
        if (err) {
          return console.log(err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    client.close();
  }
);
