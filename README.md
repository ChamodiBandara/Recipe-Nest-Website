# Recipe Nest

Recipe Nest is a React frontend with a Node.js/Express API and a MySQL database.

## Recreate the database with XAMPP

This creates the tables the API uses. It does not restore the old accounts or recipes. To recover deleted rows, restore a database backup or XAMPP's old MySQL data directory first.

1. Open the XAMPP Control Panel and start **MySQL**.
2. Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
3. Select **Import**, choose `backend/schema.sql`, then select **Go**. The script creates the `recipe_nest` database and its `users` and `recipes` tables.
4. Copy `backend/.env.example` to `backend/.env`. For a default XAMPP install, `DB_HOST=127.0.0.1`, `DB_PORT=3306`, `DB_USER=root`, and an empty `DB_PASS` are typical. If you set a MySQL password or changed the port, update those values.
5. Set `JWT_SECRET` in `backend/.env` to a long, private random value. Do not commit `.env` or share it publicly.

For a command-line setup, create an empty `recipe_nest` database in phpMyAdmin first, then run `cd backend` and `npm run migrate`. Migrations are recorded in `schema_migrations`, so rerunning the command only applies new migration files.

You can also import the schema from a terminal with `mysql -u root -p < backend/schema.sql` (omit `-p` if the MySQL root account has no password).

## Run locally

In two terminals, from the project folder:

```sh
cd backend
npm install
npm start
```

```sh
cd frontend
npm install
npm start
```

The API listens on `http://localhost:3001` by default, and the React development server opens at `http://localhost:3000`.

## Deploy the app and database

XAMPP is for local development. For a public deployment, provision a MySQL or MariaDB database with your hosting provider, then use the migration command below to create its tables. `backend/schema.sql` is also available for a one-time manual import. The deployed API must be able to connect to that database over the network; do not expose the database port publicly unless your provider requires it.

Deploy `backend/` as a Node.js service and configure these environment variables in the host's settings (do not upload `.env`):

```text
PORT=<provided by host, if required>
DB_HOST=<database host>
DB_PORT=<database port, commonly 3306>
DB_USER=<database username>
DB_PASS=<database password>
DB_NAME=recipe_nest
JWT_SECRET=<long private random value>
```

Create the `recipe_nest` database with the provider, install backend dependencies, and run `npm run migrate` from `backend/` as a deployment/release step before starting the API. Keep future schema changes in new, numbered files under `backend/migrations/` (for example, `002_add_recipe_category.sql`); do not edit a migration that has already run on a deployed database. The runner applies pending files in order and records each successful migration in `schema_migrations`.

Deploy `frontend/` as a static React site. Set `REACT_APP_API_URL` to the deployed API origin, for example `https://api.example.com` (without a trailing `/api`), before building. Then run `npm run build` in `frontend/` and publish its `build/` directory. The API URL is included at build time, so rebuild after changing it.

The frontend currently uses Create React App's `REACT_APP_` environment variable convention. A hosting provider may have separate settings for build-time variables and runtime server variables.

## Database tables

- `users`: account names, unique email addresses, bcrypt password hashes, and creation times.
- `recipes`: recipe content, owner (`created_by`), and creation/update times. Removing a user removes that user's recipes through the foreign key.

