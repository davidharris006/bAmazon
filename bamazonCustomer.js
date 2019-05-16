var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    
    port: 9889,
  

    user: "root",
  
   
    password: "root",
    database: "bamazon"
  });




function getProducts(){

    connection.connect(function(err){
        if (err) throw err;
        console.log('connected');
        connection.query(
            `'SELECT * FROM products;`,
            function(error,data){
                console.table(data);
                connection.end()
            }
        )
    })
}

getProducts();