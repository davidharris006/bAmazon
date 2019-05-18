DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE `bamazon`.`products` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(45) NOT NULL,
  `depatrment_name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `stock_quantity` INT NOT NULL,
  PRIMARY KEY (`Id`));


INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Mirrors", "Home", 55, 100);

INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 300, 10);
INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Lighter", "Misc", 3, 500);
INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Cool Shades", "Clothing", 35, 150);

INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Water Bottle", "Kitchen", 25, 75);

INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Pot set", "Home", 120, 45);

INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Dress", "Clothing", 50, 150);

INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Basketball", "Sports", 18, 450);

INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Candle", "Home", 12, 200);

INSERT INTO products (product_name, depatrment_name, price, stock_quantity)
VALUES ("Desk Chair", "Home", 100, 80);


SELECT * FROM products;