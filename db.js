let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'mynodejs-db.cluster-cvwwjn27tjqf.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'admin1234',

});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
