# Exercism Solutions

This repository contains my solutions to various TypeScript programming exercises from [Exercism](https://exercism.org/). Exercism is an online platform where you can practice coding skills by solving exercises in over 50 different programming languages.

### [Exercises](https://exercism.org/tracks/typescript)

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In this repository, you will find my solutions to various programming exercises from Exercism. Each exercise is organized into its own directory, containing the solution files and any additional resources or notes related to the exercise.

## Installation

To access the exercises and solutions, you can clone this repository to your local machine using the following command:

```bash
git clone https://github.com/YourGitHubUsername/ExercismSolutions.git
```
## Tests

Tests for each exercise are provided in separate files within the respective exercise directories. You can run the tests using the testing framework specified for the particular programming language.

To run the tests, edit the `current-test` script in the `package.json` file to specify the path to the test file you want to run. For example:

```json
{
  "scripts": {
    "test": "jest --coverage",
    "start": "ts-node-dev --respawn --no-notify --transpileOnly --file ./index.ts",
    "current-test": "npm test ./ResistorColorTrio/resistorColorTrio.spec.ts"
  }
}
```
### Terminal cmd 
```bash
 npm run current-test
```