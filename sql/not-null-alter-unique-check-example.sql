CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20),
	email VARCHAR(50),
	age INTEGER
);

SELECT * FROM users;

INSERT INTO users(username, email, age)
VALUES 
	('tester', 'tester@gmail.com', 23);

INSERT INTO users(email, age)
VALUES 
	('tester@gmail.com', 23);

ALTER TABLE users
ALTER COLUMN username
SET NOT NULL;

DELETE FROM users
WHERE username IS NULL
RETURNING *;

INSERT INTO users(username, email, age)
VALUES 
	('', 'tester2@gmail.com', 23);

INSERT INTO users(username, email, age)
VALUES 
	('tester2', 'tester@gmail.com', 44);

ALTER TABLE users
ADD UNIQUE(email);


INSERT INTO users(username, email, age)
VALUES 
	('tester3', 'tester3@gmail.com', 55);

SELECT * FROM users;

INSERT INTO users(username, email, age)
VALUES 
	('gamer4', 'gamer4@gmail.com', -27);


ALTER TABLE users
ADD CHECK (age>18);

DELETE FROM users
WHERE id = 8;

INSERT INTO users(username, email, age)
VALUES 
	('gamer4', 'gamer4@gmail.com', 27);

SELECT * FROM users;


CREATE TABLE products (
	product_no integer,
	name text,
	price numeric CHECK (price > 0),
	discounted_price numeric CHECK (discounted_price > 0),
	CHECK (price > discounted_price)
);

INSERT INTO products(product_no, name, price, discounted_price)
VALUES 
	(1, 'test product', 12, 10);

SELECT * FROM products;
