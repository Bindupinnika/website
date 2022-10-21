var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile", autoload: true });

var doc = {
    name: "Supriya",
    email: "shjfbks@gmail.com"
};

db.insert(doc, function (err, newDoc) { 

console.log(newDoc);
  
});
