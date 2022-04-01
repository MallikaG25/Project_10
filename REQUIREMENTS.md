# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]


#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]


## Data Shapes

#### Product
-  id - number
- name - string
- price - number
-[OPTIONAL]category:string

#### User
- id - number
- first_name -string
- last_name - string
- password - string

#### Orders
- id - number 
- quantity of each product in the order - number 
- user_id - number 
- status of order (active or complete) - string

#### Orders_Products
- id - number 
- user_id - number 
- id of each product in the order: number


### Product Table(schema)
 (id: serial[primary key], 
 name : varchar(30)[NOT NULL], 
 price : number[NOT NULL])


### User Tablre(schema)
(id: serial[primary key], 
first_name: varchar(30)[NOT NULL], 
last_name: varchar(30)[NOT NULL], 
password: varchar(30)[NOT NULL])

### Orders table(schema)
(id: serial[primary key],
status: varchar(active,complete),
user_id: varchar,
quantity: number[default 1])


### Orders_product table(schema)
(id: serial[primary key], 
product_id: number(foreign key to product table),
user_id: number(foreign key to user table))


