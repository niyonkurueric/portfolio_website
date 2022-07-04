## Protoforiol web application Backend Development

## Project Setup

---

### Start Up

- Clone [this](https://github.com/niyonkurueric/portfolio_website.git) repository
- Make sure that you have node.js and npm installed on your machine. For more information refer to [node js installation guide](https://nodejs.org/en/download/package-manager/)
- Install `yarn` package by running `npm install -g yarn` script to be able to install project dependencies.
- To install project packages run `yarn install`.

### Dotenv setup

- Create `.env` in project root directory
- Open `.env.example` file to to get project environment variables.
- Copy all keys from the `.env.example` file to `.env` file and add values to corresponding keys. These can be obtained from the project administrator.

### Mongoose ORM Setup

1. **Configuring** `.env`

   - Download and install [mongoDB compas](https://downloads.mongodb.com/compass/mongodb-compass_1.32.2_amd64.deb)
   - if you dont want mongo compas also using mongo Atral for online
   - Create databases called development.

### Running server

- Run `yarn dev` to run server locally

### Running tests

- Run `yarn test` to run tests

### API Documentation

- Local:

  `http://localhost:{port}/api-docs/`

  Replace `{port}` with the port specified in `.env` file.
  Example `http://localhost:5000/api-docs/`
