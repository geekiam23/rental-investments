# Rental Investments

### SaaS Rental Investment Tool

Users can determine if a rental investment is a good or bad investment.

[Demo Site](https://rental-investment.herokuapp.com/)

## Project Objectives

- Users can sign up for a free account by providing a user name, password and email
- Users can sign in and out of Rental Investments
- Users with a standard account, can create, read, update, and delete their records
- User roles available: admin, standard, or premium
- Development database is seeded automatically with users and houses
- Users can upgrade account from a free to a paid plan
- Users can create private houses
- Users can houses with other users

## Built With

#### Languages and Frameworks:
- Ruby 2.3.3
- Rails 4.2.5
- Bootstrap
- Javascript

#### Databases:
- SQLite (Test, Development)
- PostgreSQL (Production)

#### Tools and Gems:
- Gon for translation of database into JavaScript variables
- Devise for user authentication
- Pundit for user authorization
- Figaro for secure configuration
- Faker for seeding fake data

## Setup and Configuration

#### Setup:

- Environment variables were set using Figaro and are stored in config/application.yml (ignored by git).

- The config/application.example.yml file illustrates how environment variables should be stored.

#### To run Rental Investments locally:

1. Clone the repository
2. Run `bundle install`
3. Create and migrate the database with `rake db:create` and `rake db:migrate`
4. Start the server using `rails server`
5. Run the app on `localhost:3000`
