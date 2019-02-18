
-- Drop Database ------------------------------

DROP DATABASE IF EXISTS tmnt_db;



-- Create Database, Connect, Create Schema and Extensions -----------------

CREATE DATABASE tmnt_db;

\c tmnt_db;




-- Project Table and Inserts -----------------

CREATE TABLE turtles (
  turtle_id SERIAL PRIMARY KEY,
  turtle_name VARCHAR (150) NOT NULL,
  turtle_color VARCHAR (150) NOT NULL,
  turtle_weapon VARCHAR (150) NOT NULL
);

INSERT INTO turtles (turtle_name, turtle_color, turtle_weapon) VALUES
  ('Leonardo', 'blue', 'swords'),
  ('Michelangelo', 'orange','nunchucks'),
  ('Donatello', 'purple', 'staff'),
  ('Raphael', 'red',  'sai');



-- Confirm Inserts -----------------------------

SELECT * FROM turtles;







-- END ------------------------------
