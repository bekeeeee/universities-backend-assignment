# Univeristies Assignment

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bekeeeee/universities-backend-assignment)

# Description

This project aims to create a four main apis for searching about programs abroad

# Table of Contents

- [Installation](#installation)

- [Getting started](#gettinStarted)

- [Tests](#tests)

- [License](#license)

# Installation

The following necessary dependencies must be installed to run the application properly: nodejs and typescript

# Getting started

- Clone the repository

```
git clone  https://github.com/bekeeeee/universities-backend-assignment
```

- Install dependencies

```
npm install
```

- Build and start the project

```
npm run build
npm start
```

or

```
npm run dev
```

Navigate to `http://localhost:5000`

- API Document endpoints

http://localhost:5000/api/v1/program

post `http://localhost:5000/api/v1/program` to create a program

get `http://localhost:5000/api/v1/program` to get all programs

patch `http://localhost:5000/api/v1/program/:id` to edit a program

delete `http://localhost:5000/api/v1/program/:id` to delete a program

## Testing

The tests are written in Jest.

- Run tests files

```
npm run test

```

# License

This project is license under the MIT license.
