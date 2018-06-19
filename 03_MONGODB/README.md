# MongoDB Database

MongoDB is NoSQL database which has a JSON like (BSON data) data storage.

## Setting up Database Server and Connecting with Mongo Shell

After installing MongoDB database package on your system - you will have to start the database server using command :

```bash
mongod
```

This will start MongoDB server on default port 27017. You might have to create a directory for storage in MongoDB - if server asks for storage directory

Once server is started - you can use `mongo` client to connect to local server

```bash
mongo
```

Now you can use several commands to work with database:

```
show dbs
```

This will list all the database in your system

```
use <dbname>
```

This will command will let you switch to a particular <dbname>

## Understanding MongoDB structure

1. Hostname
2. Database
3. Collection
4. Document

Hostname is Database server address - like `localhost` or `db.xy.com`. In mongoDB hostname generally uses mongodb protocol to connect.
So URLs are generally are of shape : `mongodb://localhost:27017`

Database are topmost storage level of your data - mostly each application has 1 database - however complex application might have more than 1 databases. Database is something like `university database`

There can be many collections inside a database - collection is a group of documents of similar kind - `students`, `teachers`, `courses` etc

Finally document is basic entity of storage in Mongod, it looks very similar to an object in JSON. (However it is BSON)

## Using MONGODB NODE.JS DRIVER

To install MONGODB NODE.JS DRIVER use this command

```javascript
npm install mongodb
```

You can setup database in Node server using following commands :

```javascript
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});
```

Now this `db` handle can be used to perform any CRUD operation using MongoDB NodeJS driver.

## CRUD Functions

1. Create - [Shell Version](https://docs.mongodb.com/manual/crud/#create-operations) /  [Node Version](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud#insert-documents)
2. Read - [Shell Version](https://docs.mongodb.com/manual/crud/#read-operations) /  [Node Version](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud#findoneandupdate-findoneanddelete-and-findoneandreplace)
3. Update - [Shell Version](https://docs.mongodb.com/manual/crud/#update-operations) /  [Node Version](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud#updating-documents)
4. Delete - [Shell Version](https://docs.mongodb.com/manual/crud/#delete-operations) /  [Node Version](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud#removing-documents)

## Assignment 8

demo:
------

* Create a simple angular Application from start. Create a single component with a Number and a button.
* On pressing of this button - Number should be incremented.
* Create a simple Node/Express project with a single POST API. This API should received the incremented number.
* Connect Node server to MongoDB database using the connection code. Create a collection named "numbers". Create only one doc in that collection. Incremented number should be stored in that doc.

### Final Testing

1. You should be able to increment the number from browser to Database. 
2. The number displayed on browser should come from database - not from local Javascript variable.
3. If you close the database/ edit the database number - number on browser should change accordingly.

