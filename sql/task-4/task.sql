-- Query Scenario 1
SELECT DISTINCT replacement_cost  FROM film;

-- Query Scenario 2
SELECT COUNT(DISTINCT replacement_cost)  FROM film;

-- Query Scenario 3
SELECT COUNT(*) FROM film
WHERE title LIKE 'T%' AND rating = 'G';

-- Query Scenario 4
SELECT COUNT(*) FROM country 
WHERE country LIKE '_____';

-- Query Scenario 5
SELECT COUNT(*) FROM city
WHERE city ILIKE '%R'