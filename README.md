# Devbase


This is demo  app used to showcase [Cypress.io](https://www.cypress.io/) testing. this app run the following test cases on this page http://automationpractice.com/index.php

### 1. Run the tests 

```bash
## clone this repo to a local directory
git clone xx

## cd into the cloned repo
cd xx

## install the node_modules
npm install

## cypress open  with this flag false to make the test works--env failOnSnapshotDiff=false
npm run test

### 2. Install & write tests in Cypress

[Follow these instructions to install and write tests in Cypress.](https://on.cypress.io/installing-cypress)

### 3. How the test looks running with the server locally
![locally](https://gyazo.com/bd133c412c1e4dad327937398e1959d2)

### 4. How the test looks running with the server locally
I set up a **.gitlab-ci.yml** file that include the configuration to run headless after any changes to check if the test works correctly integrated with **image: cypress/browsers:node11.13.0-chrome73**
