var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",


    port: 3306,


    user: "root",


    password: "root",
    database: "bamazon"
});

var idShopping;
var priceShopping;
var quantityShopping;



function getProducts() {

    connection.connect(function (err) {
        if (err) {
            console.log(err);
        };

        console.log('connected');

        connection.query(
            'SELECT * FROM products;',
            function (error, data) {
                console.log(data);

            }
        )
    })
}

getProducts()



function mainmenu() {


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
        .then(function (res) {

            let productid = res.productid


            connection.query(
                `SELECT * FROM products WHERE Id LIKE ${productid}`,
                function (error, data) {
                    // console.log(data[0]);
                    // console.log(data[0].stock_quantity + res.quantity);
                    const currStock = parseFloat(data[0].stock_quantity)
                    const amountPurchased = parseFloat(res.quantity)
                    if (error) throw error;
                    else if (currStock - amountPurchased <= 0) {

                        mainmenu();
                        console.log("There arent enough left!");
                    }
                    const newQuantity = currStock - amountPurchased;

                    connection.query(
                        `UPDATE products SET stock_quantity = ${newQuantity} WHERE Id LIKE ${productid}`,
                        function(error){
                            if (error) throw error

                            getProducts()
                            mainmenu()
                        }
                    )
                }
            )


        });

}
mainmenu()