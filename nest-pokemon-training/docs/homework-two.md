# Homework 2

### ORM

ORM = object relational mapping

- Creates a bridge between object-oriented programs or relational databases.
- An ORM can bypass the need for long SQL statement

##### Advantages of Using ORM Tools

- It speeds up development time for teams.
- Decreases the cost of development.
- Handles the logic required to interact with databases.
- Improves security. ORM tools are built to eliminate the possibility of SQL injection attacks.
- You write less code when using ORM tools than with SQL.

##### Disadvantages of Using ORM Tools

- Learning how to use ORM tools can be time consuming.
- They are likely not going to perform better when very complex queries are involved.
- ORMs are generally slower than using SQL.

### Prisma

- Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript
- Prisma Migrate: Migration system
- Prisma Studio: GUI to view and edit data in your database.

##### Prisma Schema

defines their application models in an intuitive data modeling language

- Data source: Specifies your database connection (via an environment variable)
- Generator: Indicates that you want to generate Prisma Client
- Data model: Defines your application models

###### Functions of Prisma models

The data model is a collection of models. A model has two major functions:

- Represent a table in relational databases or a collection in MongoDB
- Provide the foundation for the queries in the Prisma Client API

Getting a Prisma Model

- Manually writing the data model and mapping it to the database with Prisma Migrate
- Generating the data model by introspecting a database

### Prisma Migrate

- Manually adjust your Prisma data model
- Migrate your development database using the prisma migrate dev CLI command
- Use Prisma Client in your application code to access your database
