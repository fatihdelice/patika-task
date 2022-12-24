-- Query Scenario 1
SELECT AVG(rental_rate) FROM film;


-- Query Scenario 2
SELECT COUNT(*) FROM film
WHERE title LIKE 'C%';


-- Query Scenario 3
SELECT MAX(length) FROM film
WHERE rental_rate = 0.99;


-- Query Scenario 4
SELECT COUNT(DISTINCT replacement_cost) FROM film
WHERE length > 150