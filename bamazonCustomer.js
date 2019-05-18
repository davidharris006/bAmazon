var mysql = require("mysql");
var inquirer = require("inquirer");

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

inquirer
  .prompt([

    {
      type: "input",
      message: "What is the ID of the Item you would like to purchase?",
      name: "productid"
    },
    
    {
      type: "input",
      message: "How many would you like to buy?",
      name: "quantity"
    }
  ])
  .then(function(res) {
    connection.query(
        'SELECT * FROM products WHERE '
    )
  });
