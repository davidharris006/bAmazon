var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",


    port: 3306,


    user: "root",


    password: "root",
    database: "bamazon"
});


function addProduct() {
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is the ID of the Item you would like to add too?",
                name: "idproduct"
            },
            {
                type: "input",
                message: "How many would you like to add?",
                name: "quantity"
            }
        ])
        .then(function (res) {
            var addedStock = parseFloat(res.quantity)
            connection.query(
                `UPDATE products SET stock_quantity  = stock_quantity + ${addedStock} WHERE Id LIKE ${res.idproduct}`,
                function (err) {
                    if (err) throw err;
                    console.log("Stock added!!");
                    mainmenu();
                }
            )

        })
}

function addItem() {
    inquirer
    .prompt([

        {
            type: "input",
            message: "What is the name of the Item you want to add?",
            name: "product_name"
        },
        {
            type: "input",
            message: "How many are avaiable?",
            name: "quantity"
        },
        {
            type: "input",
            message: "What is the deptartment this item is in?",
            name: "department"
        },
        {
            type: "input",
            message: "What is the price?",
            name: "price"
        }
    ])
    .then(function(res){
        const name = res.product_name;
        const stock = parseFloat(res.quantity);
        const department = res.department;
        const price = parseFloat(res.price);

        connection.query(
            `INSERT INTO products(product_name, depatrment_name, price, stock_quantity)
            VALUES ("${name}", "${department}", ${price}, ${stock} )`,
            function (err){
                if (err) throw err
                console.log("Item added to list!!");
                mainmenu();
            }
        )

    })

}

function mainmenu() {


    inquirer
        .prompt([

            {
                type: "list",
                message: "What is the ID of the Item you would like to purchase?",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
                name: "userChoice"
            }
        ])
        .then(function (res) {
            console.log(res);
            switch (res.userChoice) {
                case "View Products for Sale":
                    connection.query(
                        `SELECT * FROM products`,
                        function (err, res) {
                            if (err) throw err
                            console.table(res);
                            mainmenu();
                        }
                    )
                    break;
                case "View Low Inventory":
                    connection.query(
                        `SELECT * FROM products WHERE stock_quantity<=25`,
                        function (err, res) {
                            if (err) throw err
                            console.table(res);
                            mainmenu();
                        }
                    )
                    break;
                case "Add to Inventory":
                    addProduct()
                    break;
                case "Add New Product":
                    addItem()
                    break;
                default:
                    mainmenu()
            }
        })
}
mainmenu()