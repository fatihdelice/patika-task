-- Query Scenario 1
SELECT COUNT(length)
FROM film
WHERE length >
(
	SELECT AVG(length)
	FROM film
);

-- Query Scenario 2
SELECT COUNT(rental_rate)
FROM film
WHERE rental_rate =
(
	SELECT MAX(rental_rate) FROM film
);

-- Query Scenario 3
SELECT title, rental_rate, replacement_cost FROM film
WHERE rental_rate =
(
	SELECT MIN(rental_rate) FROM film
)
AND replacement_cost =
(
	SELECT MIN(replacement_cost) FROM film
);

-- Query Scenario 4
SELECT payment.customer_id, customer.first_name, customer.last_name,  COUNT(payment.customer_id)
FROM payment
JOIN customer ON customer.customer_id = payment.customer_id
GROUP BY customer.first_name, customer.last_name, payment.customer_id
ORDER BY COUNT(payment.customer_id) DESC;
