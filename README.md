# Uswapp

[![Lint](https://github.com/dvidd/uSwapp/workflows/Lint/badge.svg)](https://github.com/dvidd/uSwapp/actions?query=workflow%3ALint)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ef69d511-c74d-4f36-af0d-3e85f8343c5f/deploy-status)](https://app.netlify.com/sites/loving-kirch-2863cb/deploys)

Uswapp protocol

## Folder structure

This repo have all the contracts of the uSwapp protocol as well as the front end of the interface

    .
    ├── migrations          # Migrations of the smart contracts
    ├── public              # Public folder for the react interface
    ├── test                # Tests scripts for testing smart contracts
    └── src
        ├── abis            # Migration files for conection with the contracts
        ├── assets          # Assets for the interface
        ├── components      # React components for the interface
        ├── contracts       # Smart contracts written in Solidity

## Set Up in Local

You will need to set a local blockchain, you can do it using <a href="https://www.trufflesuite.com/ganache" target="_blank">ganache and truffle</a>

```shell
git clone https://github.com/dvidd/uSwapp
```

```shell
cd uSwapp
```

```shell
npm install
```

```shell
npm start
```

#### Building the contracts

```shell
truffle compile
```

#### Testing contracts

```shell
truffle test
```

#### Migrating contracts to blockchain

```shell
truffle migrate
```

## Todo :

This project is currently being develop ( Not functional yet )

- Add a username name?
- Do transaction withdraw() because it does not work jet
- Exchage dollars and other currencies to ether / translation
- Errors in the transaction 
- Show the swaps that you created 
