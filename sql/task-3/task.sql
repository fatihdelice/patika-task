-- Query Scenario 1
SELECT * FROM country
WHERE country LIKE 'A%a';

-- Query Scenario 2
SELECT * FROM country
WHERE country LIKE '______%n';

-- Query Scenario 3
SELECT * FROM film
WHERE title ILIKE '%t%t%t%t';

-- Query Scenario 4
SELECT * FROM film
WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;