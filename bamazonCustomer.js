var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    
    port: 3306,
  

    user: "root",
  
   
    password: "root",
    database: "bamazon"
  });




function getProducts(){

    connection.connect(function(err){
        if (err){
            console.log(err);
        };
        
        console.log('connected');
        
        connection.query(
            'SELECT * FROM products;',
            function(error,data){
                console.log(data);
                connection.end()
            }
        )
    })
}

getProducts();