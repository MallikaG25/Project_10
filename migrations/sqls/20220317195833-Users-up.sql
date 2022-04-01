/* Replace with your SQL commands */
CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL
    );