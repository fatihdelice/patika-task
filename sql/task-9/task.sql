-- Query Scenario 1
SELECT city, country FROM city
INNER JOIN country ON city.city_id = country.country_id;

-- Query Scenario 2
SELECT payment_id, first_name, last_name FROM payment 
INNER JOIN customer ON payment.customer_id = customer.customer_id;

-- Query Scenario 3
SELECT rental_id, first_name, last_name FROM rental  
INNER JOIN customer ON rental.customer_id = customer.customer_id;
