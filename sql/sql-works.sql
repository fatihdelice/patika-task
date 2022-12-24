SELECT column1 FROM table1;

SELECT * FROM film;

SELECT first_name, last_name FROM actor;

SELECT * FROM film WHERE rental_rate = 0.99;

SELECT * FROM actor
WHERE first_name = 'Penelope';

SELECT * FROM film
WHERE rental_rate != 0.99; 
WHERE rental_rate <> 4.99; 

SELECT first_name, last_name FROM actor
WHERE first_name = 'Penelope' AND last_name = 'Monroe';
WHERE first_name = 'Penelope' OR first_name = 'Bob';

SELECT * FROM film
WHERE rental_rate = 4.99 AND length > 90;

SELECT * FROM film
WHERE rental_rate = 4.99 AND rental_duration = 3 AND replacement_cost > 20;

SELECT * FROM film
WHERE NOT (rental_rate = 4.99 AND replacement_cost > 20.99);

SELECT * FROM film
WHERE NOT length > 110;

SELECT title, length FROM film
WHERE length >= 90 AND length <= 120;


SELECT title, length FROM film
WHERE length NOT BETWEEN 90 AND 120;  -- length < 90 OR length > 120

SELECT rental_rate, replacement_cost FROM film
WHERE (rental_rate BETWEEN 2 AND 4) AND (replacement_cost BETWEEN 10 AND 20);

SELECT * FROM film
WHERE length IN (40, 50, 60); -- WHERE length = 40 OR length = 50 OR length = 60

SELECT * FROM film
WHERE replacement_cost NOT IN (10.99, 12.99, 16.99);

SELECT * FROM customer
WHERE first_name LIKE 'Ma%';

SELECT * FROM customer
WHERE first_name LIKE '%y';

SELECT * FROM customer
WHERE first_name LIKE 'A%y';

SELECT * FROM customer
WHERE first_name LIKE 'A%' AND last_name LIKE 'A%';


SELECT * FROM customer
WHERE first_name ILIKE 'a%';


SELECT * FROM customer
WHERE first_name NOT LIKE 'D%n';

SELECT * FROM actor
WHERE first_name LIKE 'T%';

SELECT * FROM actor
WHERE first_name LIKE 'T_m';

SELECT * FROM actor
WHERE first_name ~~ 'T%'; -- LIKE


SELECT * FROM actor
WHERE first_name ~~* 't%'; -- ILIKE


SELECT * FROM actor
WHERE first_name !~~* 'b%'; -- NOT ILIKE

SELECT DISTINCT rental_rate FROM film

SELECT DISTINCT replacement_cost FROM film

SELECT COUNT(*) FROM actor
WHERE first_name = 'Penelope';

SELECT COUNT(*) FROM actor
WHERE first_name LIKE 'A%';

SELECT COUNT(*) FROM actor

SELECT COUNT(DISTINCT first_name) FROM actor

SELECT COUNT(*) FROM film;

SELECT COUNT(DISTINCT length) FROM film

SELECT * FROM film
ORDER BY title ASC;

SELECT * FROM film
ORDER BY title DESC;

SELECT * FROM film
ORDER BY length;


SELECT title, length FROM film
ORDER BY length DESC;

SELECT title, rental_rate, length FROM film
WHERE title LIKE 'A%'
ORDER BY rental_rate ASC, length DESC;

SELECT * FROM film
WHERE rating = 'G'
ORDER BY length DESC;

SELECT * FROM film
WHERE rental_rate = 4.99
ORDER BY length
LIMIT 10;

SELECT * FROM film
WHERE replacement_cost = 14.99 AND rental_rate = 0.99
ORDER BY length DESC
LIMIT 7;


SELECT * FROM country
OFFSET 6
LIMIT 4;

SELECT * FROM actor
WHERE first_name = 'Penelope'
ORDER BY last_name
OFFSET 2
LIMIT 1;

SELECT MAX(replacement_cost) FROM film;

SELECT MIN(replacement_cost) FROM film;

SELECT AVG(length) FROM film;

SELECT ROUND(AVG(length), 3) FROM film;

SELECT SUM(rental_rate) FROM film;

SELECT MAX(length), MIN(length), SUM(replacement_cost) FROM film;

SELECT MAX(length) FROM film
WHERE rental_rate IN(0.99, 2.99);

SELECT rental_rate, MAX(length) FROM film
GROUP BY rental_rate;

SELECT rental_rate, COUNT(*) FROM film
GROUP BY rental_rate;

SELECT rating, COUNT(*) FROM film
GROUP BY rating;

SELECT replacement_cost, MIN(length) FROM film
GROUP BY replacement_cost;

SELECT replacement_cost, rental_rate, MIN(length) FROM film
GROUP BY replacement_cost, rental_rate;

SELECT replacement_cost, rental_rate, MIN(length) FROM film
GROUP BY replacement_cost, rental_rate
ORDER BY replacement_cost, rental_rate DESC;

SELECT replacement_cost, rental_rate, MIN(length) FROM film
GROUP BY replacement_cost, rental_rate
ORDER BY MIN(length);

SELECT replacement_cost, rental_rate, MIN(length) FROM film
GROUP BY replacement_cost, rental_rate
ORDER BY MIN(length)
LIMIT 8;

SELECT rental_rate, COUNT(*) FROM film
GROUP BY rental_rate
HAVING COUNT(*) > 325;

SELECT rental_rate, COUNT(*) FROM film
WHERE rental_rate != 2.99
GROUP BY rental_rate;

SELECT staff_id, COUNT(*) FROM payment
GROUP BY staff_id
HAVING COUNT(*) > 7300;

SELECT customer_id, SUM(amount) FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 100
ORDER BY SUM(amount) DESC
LIMIT 1;

SELECT first_name AS isim, last_name AS soyisim FROM actor;

SELECT first_name isim, last_name soyisim FROM actor;

SELECT first_name AS "isim", last_name AS "soyisim" FROM actor;

SELECT COUNT(*) AS "aktor sayisi" FROM actor;

SELECT CONCAT(first_name, ' ', last_name) AS "isim ve soyisim" FROM actor;
