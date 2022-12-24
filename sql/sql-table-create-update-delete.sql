CREATE TABLE <table_name>(
	<column_name> <data_type> <constraint>,
	...
	<column_name> <data_type> <constraint>;	
)

CREATE TABLE author(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100),
	birthday DATE
);


INSERT INTO author (first_name, last_name, email, birthday)
VALUES
	('Haruki', 'Murakami', 'haruki@murakami.com', '1948-11-07'),
	('Sabahattin', 'Ali', 'sabahattin@ali.com', '1914-07-11'),
	('Orhan', 'Pamuk', 'orhan@pamuk.com', '1950-04-14'),
	('Halide Edip', 'Adıvar', 'halide@edip.com', '1884-07-11'),
	('Zygmunt', 'Baluman', 'zygmunt@baluman.com', '1911-07-12');
	
	
SELECT * FROM author;

CREATE TABLE author2 (LIKE author);

INSERT INTO author2
SELECT * FROM author
WHERE first_name ='Sabahattin';

SELECT * FROM author2;

CREATE TABLE author3 AS
SELECT * FROM author;

SELECT * FROM author3;

DROP TABLE IF EXISTS author4;

DROP TABLE IF EXISTS author2;

insert into author (first_name, last_name, email, birthday) values ('Farley', 'Sadgrove', 'fsadgrove0@smugmug.com', '1990-10-28');
insert into author (first_name, last_name, email, birthday) values ('Betteann', 'Martinolli', 'bmartinolli1@intel.com', '1923-01-19');
insert into author (first_name, last_name, email, birthday) values ('Bernardo', 'Largent', 'blargent2@shareasale.com', '1994-09-06');
insert into author (first_name, last_name, email, birthday) values ('Loren', 'Fills', null, null);
insert into author (first_name, last_name, email, birthday) values ('Tobiah', 'Rothon', 'trothon4@jugem.jp', '1973-06-06');
insert into author (first_name, last_name, email, birthday) values ('Joellen', 'Lumsden', 'jlumsden5@census.gov', null);
insert into author (first_name, last_name, email, birthday) values ('Sherwynd', 'Crookall', 'scrookall6@shutterfly.com', '1992-07-20');
insert into author (first_name, last_name, email, birthday) values ('Lester', 'Vye', 'lvye7@washington.edu', null);
insert into author (first_name, last_name, email, birthday) values ('Ranee', 'Stollenbeck', 'rstollenbeck8@mail.ru', null);
insert into author (first_name, last_name, email, birthday) values ('Briant', 'Stittle', null, '1915-09-01');
insert into author (first_name, last_name, email, birthday) values ('Corella', 'Edden', 'ceddena@usa.gov', '1916-05-23');
insert into author (first_name, last_name, email, birthday) values ('Ramona', 'Grisbrook', 'rgrisbrookb@deviantart.com', '1964-04-23');
insert into author (first_name, last_name, email, birthday) values ('Marcello', 'McNirlan', 'mmcnirlanc@epa.gov', '1958-06-01');
insert into author (first_name, last_name, email, birthday) values ('Layne', 'Soltan', 'lsoltand@nasa.gov', null);
insert into author (first_name, last_name, email, birthday) values ('Linnie', 'Pont', 'lponte@hp.com', '1977-09-27');
insert into author (first_name, last_name, email, birthday) values ('Gilberta', 'Matthews', 'gmatthewsf@comsenz.com', '1997-05-14');
insert into author (first_name, last_name, email, birthday) values ('Paige', 'Theze', 'pthezeg@xing.com', '1985-10-10');
insert into author (first_name, last_name, email, birthday) values ('Erek', 'Kamena', 'ekamenah@princeton.edu', '1969-02-10');
insert into author (first_name, last_name, email, birthday) values ('Celestyna', 'Hathorn', 'chathorni@jalbum.net', '1984-08-06');
insert into author (first_name, last_name, email, birthday) values ('Eben', 'Kausche', 'ekauschej@ucoz.com', '1982-03-22');
insert into author (first_name, last_name, email, birthday) values ('Ada', 'Shird', 'ashirdk@auda.org.au', '1944-02-14');
insert into author (first_name, last_name, email, birthday) values ('Cly', 'Dryburgh', 'cdryburghl@newyorker.com', null);
insert into author (first_name, last_name, email, birthday) values ('Marybeth', 'Walesa', 'mwalesam@ucsd.edu', '1959-05-04');
insert into author (first_name, last_name, email, birthday) values ('Saudra', 'Guidi', 'sguidin@facebook.com', null);
insert into author (first_name, last_name, email, birthday) values ('Ericka', 'Wales', 'ewaleso@hc360.com', '1958-01-04');
insert into author (first_name, last_name, email, birthday) values ('Shea', 'Tresise', 'stresisep@seesaa.net', '1908-02-19');
insert into author (first_name, last_name, email, birthday) values ('Joyan', 'De Andisie', 'jdeandisieq@statcounter.com', '1910-01-17');
insert into author (first_name, last_name, email, birthday) values ('Perl', 'Lambshine', 'plambshiner@creativecommons.org', '1997-04-27');
insert into author (first_name, last_name, email, birthday) values ('Denise', 'Nixon', 'dnixons@barnesandnoble.com', '1917-06-23');
insert into author (first_name, last_name, email, birthday) values ('Sindee', 'Fealty', 'sfealtyt@nature.com', null);
insert into author (first_name, last_name, email, birthday) values ('Daphne', 'Caunce', 'dcaunceu@chronoengine.com', null);
insert into author (first_name, last_name, email, birthday) values ('Isidora', 'Mowson', 'imowsonv@zdnet.com', '1917-03-29');
insert into author (first_name, last_name, email, birthday) values ('Elladine', 'Draycott', 'edraycottw@youku.com', '1910-08-01');
insert into author (first_name, last_name, email, birthday) values ('Bret', 'Giacobo', 'bgiacobox@sina.com.cn', '1957-12-04');
insert into author (first_name, last_name, email, birthday) values ('Sabina', 'McNae', null, '1959-08-23');
insert into author (first_name, last_name, email, birthday) values ('Lemmy', 'Simpkins', 'lsimpkinsz@howstuffworks.com', '1993-12-24');
insert into author (first_name, last_name, email, birthday) values ('Carlo', 'Cesco', 'ccesco10@parallels.com', '1914-11-04');
insert into author (first_name, last_name, email, birthday) values ('Marijo', 'MacKaig', 'mmackaig11@blinklist.com', '1925-09-08');
insert into author (first_name, last_name, email, birthday) values ('Sara', 'Farrington', 'sfarrington12@about.me', '1934-12-30');
insert into author (first_name, last_name, email, birthday) values ('Phillipe', 'Rootham', 'prootham13@usa.gov', null);
insert into author (first_name, last_name, email, birthday) values ('Misha', 'Pitney', 'mpitney14@xrea.com', '1901-06-30');
insert into author (first_name, last_name, email, birthday) values ('Kacie', 'Markovic', null, '1922-10-16');
insert into author (first_name, last_name, email, birthday) values ('Alfreda', 'Hars', 'ahars16@wix.com', '1956-11-11');
insert into author (first_name, last_name, email, birthday) values ('Miguel', 'Gobourn', 'mgobourn17@histats.com', '1922-11-23');
insert into author (first_name, last_name, email, birthday) values ('Eldredge', 'Grose', 'egrose18@cnbc.com', '1996-01-04');
insert into author (first_name, last_name, email, birthday) values ('Rhiamon', 'Rait', 'rrait19@livejournal.com', '1929-01-31');
insert into author (first_name, last_name, email, birthday) values ('Gisella', 'Lamplugh', null, null);
insert into author (first_name, last_name, email, birthday) values ('Emmit', 'Hourahan', 'ehourahan1b@soup.io', '1954-09-09');
insert into author (first_name, last_name, email, birthday) values ('Kelsi', 'Marchetti', 'kmarchetti1c@tmall.com', '1965-08-23');
insert into author (first_name, last_name, email, birthday) values ('Burgess', 'Sleet', 'bsleet1d@indiatimes.com', '1953-01-21');
insert into author (first_name, last_name, email, birthday) values ('Arv', 'Grimes', 'agrimes1e@elegantthemes.com', '1923-04-03');
insert into author (first_name, last_name, email, birthday) values ('Lombard', 'Jordine', 'ljordine1f@state.gov', null);
insert into author (first_name, last_name, email, birthday) values ('Taylor', 'Stringfellow', 'tstringfellow1g@washingtonpost.com', '1927-04-14');
insert into author (first_name, last_name, email, birthday) values ('Sven', 'Breeds', null, '1977-06-22');
insert into author (first_name, last_name, email, birthday) values ('Maible', 'Grewcock', 'mgrewcock1i@histats.com', '1908-12-31');
insert into author (first_name, last_name, email, birthday) values ('Garth', 'Kyllford', 'gkyllford1j@biblegateway.com', null);
insert into author (first_name, last_name, email, birthday) values ('Regan', 'Finnes', 'rfinnes1k@nsw.gov.au', null);
insert into author (first_name, last_name, email, birthday) values ('Case', 'Maginn', 'cmaginn1l@java.com', '1906-10-31');
insert into author (first_name, last_name, email, birthday) values ('Delilah', 'Morecomb', 'dmorecomb1m@biglobe.ne.jp', '1958-01-12');
insert into author (first_name, last_name, email, birthday) values ('Dulce', 'Tomblett', null, '1959-04-22');
insert into author (first_name, last_name, email, birthday) values ('Florida', 'Renney', 'frenney1o@lulu.com', '1924-06-21');
insert into author (first_name, last_name, email, birthday) values ('Dita', 'Duigenan', 'dduigenan1p@google.co.jp', '1903-12-21');
insert into author (first_name, last_name, email, birthday) values ('Quintus', 'Scrowson', 'qscrowson1q@ycombinator.com', '1902-12-06');
insert into author (first_name, last_name, email, birthday) values ('Gracia', 'Beauchamp', 'gbeauchamp1r@google.pl', '1914-07-13');
insert into author (first_name, last_name, email, birthday) values ('Alane', 'Jaulmes', 'ajaulmes1s@paginegialle.it', '1997-05-21');
insert into author (first_name, last_name, email, birthday) values ('Camey', 'Letteresse', null, null);
insert into author (first_name, last_name, email, birthday) values ('Prentice', 'Kyncl', 'pkyncl1u@whitehouse.gov', '1995-10-18');
insert into author (first_name, last_name, email, birthday) values ('Zitella', 'Ashton', 'zashton1v@wsj.com', '1916-12-10');
insert into author (first_name, last_name, email, birthday) values ('Sig', 'Licas', 'slicas1w@bloomberg.com', '1910-02-18');
insert into author (first_name, last_name, email, birthday) values ('Randy', 'Normanville', 'rnormanville1x@xing.com', '1991-03-17');
insert into author (first_name, last_name, email, birthday) values ('Sybille', 'Labitt', 'slabitt1y@eepurl.com', '1966-03-14');
insert into author (first_name, last_name, email, birthday) values ('Yurik', 'Fife', 'yfife1z@ebay.co.uk', '1970-02-06');
insert into author (first_name, last_name, email, birthday) values ('Noah', 'MacLure', 'nmaclure20@ihg.com', null);
insert into author (first_name, last_name, email, birthday) values ('Hill', 'Bodham', 'hbodham21@goodreads.com', '1925-02-22');
insert into author (first_name, last_name, email, birthday) values ('Lotte', 'Favel', 'lfavel22@cargocollective.com', null);
insert into author (first_name, last_name, email, birthday) values ('Rafael', 'Gebhardt', 'rgebhardt23@japanpost.jp', '1993-10-17');
insert into author (first_name, last_name, email, birthday) values ('Dwight', 'Maghull', 'dmaghull24@weebly.com', null);
insert into author (first_name, last_name, email, birthday) values ('Joelly', 'O'' Connell', 'joconnell25@gravatar.com', '1923-04-17');
insert into author (first_name, last_name, email, birthday) values ('Hilliard', 'Skellington', 'hskellington26@drupal.org', null);
insert into author (first_name, last_name, email, birthday) values ('Pyotr', 'Gillum', 'pgillum27@simplemachines.org', '1953-06-29');
insert into author (first_name, last_name, email, birthday) values ('Harriet', 'Sewley', 'hsewley28@nbcnews.com', '1962-02-01');
insert into author (first_name, last_name, email, birthday) values ('Becca', 'Chattock', 'bchattock29@so-net.ne.jp', '1931-10-14');
insert into author (first_name, last_name, email, birthday) values ('Isabel', 'Shorey', 'ishorey2a@businessweek.com', '1945-12-24');
insert into author (first_name, last_name, email, birthday) values ('Sebastien', 'Keningham', 'skeningham2b@mediafire.com', '1925-12-11');
insert into author (first_name, last_name, email, birthday) values ('Sawyer', 'Joubert', 'sjoubert2c@netlog.com', null);
insert into author (first_name, last_name, email, birthday) values ('Raul', 'Concannon', 'rconcannon2d@soup.io', '1995-02-18');
insert into author (first_name, last_name, email, birthday) values ('Ingra', 'Van Weedenburg', 'ivanweedenburg2e@hao123.com', '1951-06-15');
insert into author (first_name, last_name, email, birthday) values ('Celestina', 'Truesdale', 'ctruesdale2f@cafepress.com', null);
insert into author (first_name, last_name, email, birthday) values ('Dionne', 'Slite', 'dslite2g@google.com.br', '1996-12-03');
insert into author (first_name, last_name, email, birthday) values ('Tammie', 'Fairlie', 'tfairlie2h@printfriendly.com', '1949-05-09');
insert into author (first_name, last_name, email, birthday) values ('Desdemona', 'Manifield', 'dmanifield2i@joomla.org', '1930-07-08');
insert into author (first_name, last_name, email, birthday) values ('Dominic', 'Wrankling', 'dwrankling2j@shinystat.com', '1944-09-25');
insert into author (first_name, last_name, email, birthday) values ('Trude', 'Cofax', 'tcofax2k@globo.com', '1917-10-22');
insert into author (first_name, last_name, email, birthday) values ('Frederik', 'Gowing', 'fgowing2l@e-recht24.de', '1989-01-19');
insert into author (first_name, last_name, email, birthday) values ('Shawnee', 'Tomisch', 'stomisch2m@liveinternet.ru', '1975-08-22');
insert into author (first_name, last_name, email, birthday) values ('Guenna', 'Kelbie', 'gkelbie2n@google.ca', '1911-01-22');
insert into author (first_name, last_name, email, birthday) values ('Kathi', 'Kopelman', 'kkopelman2o@posterous.com', '1983-10-02');
insert into author (first_name, last_name, email, birthday) values ('Phillip', 'Nolder', 'pnolder2p@taobao.com', '1968-11-13');
insert into author (first_name, last_name, email, birthday) values ('Adria', 'Halligan', 'ahalligan2q@joomla.org', '1983-09-22');
insert into author (first_name, last_name, email, birthday) values ('Celestyna', 'Bockmaster', 'cbockmaster2r@hibu.com', '1974-05-01');
	
	
	
SELECT * FROM author;

UPDATE <table_name>
SET column1 = value1,
	column2 = value2,
	....
WHERE confition;

UPDATE author 
SET first_name = 'Emrah Sefa',
	last_name = 'Gürkan',
	email = 'emrah@gurkan',
	birthday = '1980-01-01'
WHERE id = 10;

SELECT * FROM author;


UPDATE author 
SET first_name = 'XXXX',
	last_name = 'YYYY'
WHERE first_name LIKE 'V%';

SELECT * FROM author;

UPDATE author
SET last_name = 'UPDATE'
WHERE first_name = 'Odetta'
RETURNING *;



DELETE FROM <table_name>
WHERE condition;

DELETE FROM author
WHERE id = 6;