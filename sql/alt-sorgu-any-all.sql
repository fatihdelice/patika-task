-- SELECT * FROM book
-- WHERE page_number < 466;

-- SELECT page_number FROM book
-- WHERE title = 'Gülün Adı';


SELECT * FROM book
WHERE page_number <
(
	SELECT page_number FROM book
	WHERE title = 'Gülün Adı'
);

SELECT title, page_number, (SELECT MAX(page_number) FROM book), ((SELECT MAX(page_number) FROM book) - page_number) AS differ 
FROM book
WHERE page_number <
(
	SELECT page_number FROM book
	WHERE title = 'Gülün Adı'
);





-- --




SELECT first_name, last_name
FROM author
WHERE id = ANY
(
	SELECT id
	FROM book
	WHERE title = 'Spy Hard' OR title = 'Fanny'
);

-- --

SELECT author.first_name, author.last_name, book.title
FROM author
INNER JOIN book ON book.author_id = author.id
WHERE page_number >
(
  SELECT AVG(page_number) FROM book
);

SELECT actor.first_name, actor.last_name, film.title
FROM actor
JOIN film_actor ON film_actor.actor_id = actor.actor_id
JOIN film ON film.film_id = film_actor.film_id
WHERE film.length =
(
  SELECT MAX(length)  FROM film
)