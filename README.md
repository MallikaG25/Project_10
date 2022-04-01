# Storefront Backend

# Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

# Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

______________________________________________________________________________________________________________
# Here we have to open two terminals

# First Terminal -- For creating database:

1. For postgres connection run `su postgres`
2. For sql connection run `psql postgres`
3. For new user creation run `CREATE USER Mallika_G WITH PASSWORD 'password225';`
4. For database creation `CREATE DATABASE store;`
5. Database for store_test `CREATE DATABASE store_test;`
6. To connect with database `\c dreamland`
7. `GRANT ALL PRIVILEGES ON DATABASE store TO Mallika_G;`

______________________________________________________________________


# Second Terminal -- To install the requirements

1. use the command `npm i` to install yarn
2. use the command `npm install db-migrate -g` to install db-migrate on the machine.
3. node version has to be 10 or 12 in level check it by using the command `node -v`

# Install all dependencies 
# To install run `npm install <dependencies name>`

	"dependencies": {
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "db-migrate": "^0.11.13",
    "db-migrate-pg": "^1.2.2",
    "dotenv": "^16.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "pg": "^8.5.1",
    "supertest": "^6.2.2",
    "typescript": "^4.1.3"


# Install devDependencies
# To install run `npm install --save-dev <dependencies name>`

  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.9",
    "@types/jasmine": "^3.6.3",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/pg": "^7.14.7",
    "@types/supertest": "^2.0.11",
    "jasmine": "^3.6.4",
    "jasmine-spec-reporter": "^6.0.0",
    "jasmine-ts": "^0.3.0",
    "ts-node": "^9.1.1",
    "tsc-watch": "^4.2.9"
    


# starting the server

server is running on port 3000

# starting the database

database is running on port 5432.

# url

https://localhost:3000


# For testing 

`npm run test`

# For running  server

`npm run start`

_____________________________________________________________________________________________________________


## ENV file setup


POSTGRES_HOST = '127.0.0.1'
POSTGRES_DB = "dreamland"
POSTGRES_TEST_DB = "dreamland_test"
POSTGRES_USER = "Mallika_G"
POSTGRES_PASSWORD = "password225"
ENV = "test"

BCRYPT_PASSWORD = "mine"
SALT_ROUNDS = "10"
TOKEN_SECRET = "secret-means-secret"

______________________________________________________________________________________________________________


# API List

# API of USER 

1. Create new user (POST)

  http://localhost:3000/users/




2. Authenticate (POST)

  http://localhost:3000/users/authenticate/



3. Get all users (GET)

  http://localhost:3000/users/



4. Get single user by user_id (GET)

  http://localhost:3000/users/:id



#  Product API

1. Create new product (POST)

  
  http://localhost:3000/product/



2. Get all products (GET)

  http://localhost:3000/product/
  ```


3. Get single product by product_id (GET)

  http://localhost:3000/product/:id

  


# Order API

1. Create new order (POST)

  http://localhost:3000/orders/
  


2. Get all orders (GET)

  http://localhost:3000/orders/

  


3. Get single order by order_id (GET)

  http://localhost:3000/orders/:id


