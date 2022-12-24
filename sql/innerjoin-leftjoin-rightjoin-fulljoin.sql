-- SELECT title, first_name, last_name FROM book
SELECT * FROM book
INNER JOIN author ON book.author_id = author.id;


SELECT first_name, last_name, title FROM book
FULL JOIN author ON author.id = book.author_id;
SELECT first_name, last_name, title FROM author
LEFT JOIN book ON author.id = book.author_id
WHERE book.id IS NOT NULL
ORDER BY book.title;

SELECT first_name, last_name, title FROM book
LEFT JOIN author ON author.id = book.author_id;

-- INSERT INTO book (title, page_number, author_id)
-- VALUES
-- 	('Gülün Adı', 466, 44),
-- 	('Yapay Zeka', 108, 55);

-- ALTER TABLE book
-- DROP CONSTRAINT book_author_id_fkey;

-- SELECT * FROM book;


SELECT first_name, last_name, title FROM book
RIGHT JOIN author ON author.id = book.author_id;

SELECT first_name, last_name, title FROM book
RIGHT OUTER JOIN author ON author.id = book.author_id;



SELECT first_name, last_name, title FROM book
FULL JOIN author ON author.id = book.author_id;

SELECT * FROM book
FULL JOIN author ON author.id = book.author_id;

SELECT * FROM book
FULL OUTER JOIN author ON author.id = book.author_id
WHERE (book.id IS NOT NULL AND author.id IS NOT NULL);

SELECT * FROM book
FULL OUTER JOIN author ON author.id = book.author_id
WHERE (book.id IS NULL OR author.id IS NULL);
