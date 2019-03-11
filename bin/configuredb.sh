#!/bin/bash

# Export all variables in .env into current environment
export $(cat .env | xargs)

database="yuchdb"

# WARNING!!  DO NOT DROP THE DATABASE.
# Instead, add sql fild with different number.

echo "Configuring database: $database"

dropdb -U postgres yuchdb
createdb -U postgres yuchdb

# psql -U postgres yuchdb < ./bin/sql/yuch.sql

# knex migrate:make file_name
# knex migrate:rollback
# knex migrate:latest
# knex seed:run

echo "$database configured"
