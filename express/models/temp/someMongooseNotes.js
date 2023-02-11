
// Import mongoose to get access to schema and model constructors:
const mongoose = require("mongoose");

// Create initial schemas for test related objects:
const applicationSchema = mongoose.(new Schema)({
  url      : String,
  name     : String,
  version  : String,
  keywords : [String]
  // Maybe some stuff for login credentials, etc.
  // Although we could use separate objects for that.
});

const testSuiteSchema = mongoose.(new Schema)({
  name      : String,
  version   : String,
  keywords  : [String],
  testCases : [{type: Schema.Types.ObjectId, ref: "TestCase"}]
});

const testCaseSchema = mongoose.(new Schema)({
  name           : String,
  preConditions  : [assertions on DOM state?],
  postConditions : [assertions on DOM state?],
  steps          : [selenium actions]
});

const testRunSchema = mongoose.(new Schema)({
  application : {type: Schema.Types.ObjectId, ref: "Application"}
  environment : {type: Schema.Types.ObjectId, ref: "Environment"}
  status      : {type: Schema.Types.ObjectId, ref: "Status"}
  // results  : will need to figure out how to store this one.
 
});

// According to mdn, every model object will have an associated connection.
// I'm assuming that all instances of this model reference that connection information.


// Compiling the schemas into models: According to mdn, compling the model CREATES the corresponding collection.
const ApplicationModel = mongoose.model("Application", applicationSchema);

let a = new ApplicationModel({
  url: "http://www.arstechnica.com", 
  name: "ArsTechnica", 
  version: "1.0.0", 
  keywords: ["art", "tech", "technology", "computers"]
})

// You can change the values held by a by referring to its attributes using dot notation.
// But you must call "save" or "update" to update your database to conform with the new values.

// Saving an instance into the database:
a.save((err) => {if (err) {return handleError(err);});

// You can combine creating a new model instance and saving it with "create":
// ApplicationModel.create({<instance data>}, <callback function>);
// The return value of create is also a reference to the new model instance object.

// You execute queries on model objects (not model instances). For example:
ApplicationModel.find({name: "ArsTechnica", "url name version keywords", (err, instances) => {
  if (err) return handleError(err);
  // instances would contain the list of instances that match the criteria.
})

// You can defer query execution by using an overloaded version of "find" that doesn't take the callback argument. That version is synchronous and instead returns a query object that you can later execute by calling exec() on it.

names ::= name, names
name ::= 

nameTypes ::= first | middle | last | pseudonym | nickname
How would we describe a name like E.J. Elliott?

// A stack overflow post suggests that the correct interpretation of "this" is as a runtime variable that can point to various objects on the object heap, and the "new" keyword makes this point to the object being created when a constructor function is invoked prefaced by the "new" keyword.

// javascript uses prototype based object inheritance, using just standard objects that exist on the object heap during runtime as the templates for creating other objects. There is an advantage in treating class definitions and object instances as the same type, because it allows for manipulating class definitions during runtime as just another type of data.



