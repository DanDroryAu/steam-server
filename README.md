# Fizzlr - be app

# table of contents
- [Installation](#installation)
    - [prerequisites](#prerequisites)
    - [nice to have](#nice-to-have)
    - [Installation](#installation-1)
- [Running the app](#running-the-app)
- [Building the app](#building-the-app)
- [Testing](#testing)
- [Notes](#notes)


# Installation

### prerequisites:
- `nodejs` to install: `
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
- `yarn` to install: `npm install -g yarn`
### nice to have:

the following are nice to have for installation and controlling environment values.

- `direnv` to install follow the instructions here: https://direnv.net/
- `homebrew` to install follow the instructions here: https://brew.sh/

### Installation
To install the app run the following command:

```bash
yarn install
```

after that you will need to add some environment variables to the `.envrc` file in the root of the project.

run the following command to create the `.envrc` file:
```bash
cp .envrc.example .envrc
```
then add the environment variables to the `.envrc` file.

In order to get your steam key you will have to go to the following url: https://steamcommunity.com/dev/apikey

lastly run the following command to load the environment variables:
```bash
direnv allow .
```
you can alternatively load the env vars into your shel by running the exports manually.

# Running the app
to run the app in dev mode run the following command:
```bash
yarn dev
```

# compiling the schema
this app uses graphql. Whenever you make changes to the graphql schema you will need to compile it to a new final schema. Running this script will generate that for you.

to compile the schema run the following command:
```bash
yarn codegen:schema
```

# Building the app
to build the app run the following command:
```bash
yarn build
```

you can then serve it from the `dist` folder by running the following command:
```bash
yarn start
```

# Testing
to run the tests run the following command:
```bash
yarn test
```

# Notes

### Tech stack
the app is built using `nodejs`.

I've decided to use `graphql` over `rest`. I like graphql's flexibility over rests way of accessing data. It's also easier to use in the frontend because you can query exactly what you need.

I've decided to use `vitest` for tests here. Similar reasons as the fe application. Faster test runner and it uses the same api for ease of development.

I've also decided to use `rollup` for the bundling and serving. I've had issues with a pure tsc compilation and thought it would be easier to let rollup bundle it all. Its much smaller than webpack and its what vite uses so it keeps both applications in sync.

### Libraries
I've decided to use `apollo server` for the backend because I wanted to use graphql and it comes with an express app out of the box.

I've decided to use `msw` for mocking the API calls to the steam server in the tests. It allows me to intercept the http requests without having to mock the `fetch` function. this maintains normal fetch behaviour and simulates a backend response.

### Extra feature
As an extra feature I decided to fetch the userData from steam and serve it back. I'm displaying some extra info because it is nice to see who you are actually looking at. I've also used the created time to calculate how much time you've spent gaming (on steam) during the time you have been active. This is expressed in a percentage. I personally do not like my own percentage :D. I need to spend more time with my family by the looks of it.

### Improvements
Again I would write more tests, I;ve only written one suite for one section of the app. I would add tests around the steamService, schema generator, and the apollo server that I've created. For sake of time I've left those out.

The error handling in the app is non-existent. I've decided to go for happy paths only. If I would have added error handling I would opt for a service like sentry or data-dog to capture all unhandled exceptions. I would also add error codes to known problems so that we can debug it and send back friendly messages to the users that can potentially unblock them.

I would also have liked to add more ESLINT rules. For sake of time I've decided against setting up my "perfect" eslint config. I would add prettier as well as look at some other rules that I would want to enable.

I would also add a caching layer to the steam api. I'm currently fetching the data every time the user hits the endpoint. This is not ideal because the steam api has a rate limit. I would add a caching layer to the app so that we can cache the data for a certain amount of time. This would also speed up the app because we would not have to wait for the steam api to respond. Apollo is luckily cached in the frontend but if multiple sources are requesting the same endpoint we would still hit the steam api multiple times.

lastly, the deployment of the app is simple via Heroku. I would much rather deploy it to AWS with github actions being able to do multiple checks but for the purpose of this test I think heroku will suffice (its cheap - read, free -  and easy to set up.)
