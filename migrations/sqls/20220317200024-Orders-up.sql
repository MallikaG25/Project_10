/* Replace with your SQL commands */
CREATE TABLE Orders(
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    user_id INTEGER REFERENCES Users(id),
    status VARCHAR(20));