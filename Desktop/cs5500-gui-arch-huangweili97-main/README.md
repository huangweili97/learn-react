[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2BjS2nOu)
# Homework 2

## Specifications and Grading

Start by reading the document linked [here](https://northeastern-my.sharepoint.com/:w:/g/personal/j_mitra_northeastern_edu/EVF_LZ0NQaJDvFosoCJY2P4Bv6TPwRmQsxKfTp-KnjG3EA?e=xeepJV) carefully. 
The document has the following information:

- the problem description, 
- the system design, 
- the code structure description,
- functional requirements with expected screenshots,
- Information on how read and run Cypress tests,
- How to debug a failing test,
- the tasks you need to complete, and 
- the grading rubric


## Getting started

- Install [Node](https://nodejs.org/en/download/package-manager)
- Install all project dependencies by running the command below from the project root:
    `$ npm install`
- Check if necessary dependencies installed:
    `$ npm ls`

- Depdencies needed:
    - Cypress
    - Typescript
    - React
    - ESLint

## Start the Application

Run the following command to start the application:

`$ npm start`

Open the URL __http://localhost:3000/__ in a browser to see the application.

## Run the tests:

Make sure application is running before running the tests.

From the browser: run the following command and select e2e testing.

`$ npx cypress open`

From the command line:

`$ npx cypress run`

## Run ESLint Style Checker

The project is configured to check for style violations. Run the command below to check if you are violating any style rules.

`$ npx eslint src/`

You must fix all style errors and warnings reported by the linter. You will get no credit for the style section in the rubric if you fail to do so.

The list of rules and a brief description of each rule that the linter checks is give [here](https://typescript-eslint.io/rules).