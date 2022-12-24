-- Query Scenario 1
SELECT rating FROM film
GROUP BY rating;


-- Query Scenario 2
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;


-- Query Scenario 3
SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;


-- Query Scenario 4
SELECT country_id, MAX(country_id), COUNT(*) FROM city
GROUP BY country_id
ORDER BY COUNT(*) DESC;