# Chandrayaan 3 Incubyte Assessment Using Test Driven Development (TDD)
## Table of contents
- [How TDD work?](#how-tdd-work)
- [Setup TDD Environment](#setup-tdd-environment)
- [Logic](#logic)
- [Project Architecture](#project-architecture)
- [Key Outcomes](#key-outcomes)

---
## How TDD work?
Test-driven development (TDD) is a software development approach where you write tests before writing the actual code:

Write a failing test case that describes the desired functionality.
Write the minimum code necessary to make the test pass.
Refactor the code to improve its structure while ensuring the test continues to pass.
Repeat steps 1-3 for each new piece of functionality.
TDD helps ensure code quality, maintainability, and that software meets its requirements.
![flow](https://github.com/dhruv2x/Incubyte_TDD_Assessment/assets/84621641/5349913e-8be9-4936-859c-d3a190a3fccc)

## Setup TDD Environment

To set up the Test-Driven Development (TDD) environment for this project, follow these steps:

1. Create an NPM project:
   ```bash
   $ npm init
   ```

2. Create `example.js` and add it to the project’s root.

3. Install Jest for testing:
   ```bash
   $ npm install jest --save-dev
   ```

4. Update the `package.json` test script to run Jest tests:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

5. Create test files using the `.test.js` extension to write your tests.

6. To run tests, use the following command:
   ```bash
   $ npm run test
   ```

---

## Logic

This section explains how spacecraft movement works.
In the main command logic, traverse the command array and execute the appropriate function based on the current command. Here's an outline of the logic:

```javascript
function moveForward() {
    if (direction == 'N') y++;
    else if (direction == 'E') x++;
    else if (direction == 'W') x--;
    else if (direction == 'S') y--;
    else if (direction == 'U') z++;
    else if (direction == 'D') z--;
}

function moveBackward() {
    if (direction == 'N') y--;
    else if (direction == 'E') x--;
    else if (direction == 'W') x++;
    else if (direction == 'S') y++;
    else if (direction == 'U') z--;
    else if (direction == 'D') z++;
}

function turnLeft() {
    if (direction == 'N') direction = 'W';
    else if (direction == 'E') direction = 'N';
    else if (direction == 'W') direction = 'S';
    else if (direction == 'S') direction = 'E';
    else if (direction == 'U') direction = 'N';
    else if (direction == 'D') direction = 'S';
}

function turnRight() {
    if (direction == 'N') direction = 'E';
    else if (direction == 'E') direction = 'S';
    else if (direction == 'W') direction = 'N';
    else if (direction == 'S') direction = 'W';
    else if (direction == 'U') direction = 'S';
    else if (direction == 'D') direction = 'N';
}

function turnUp() {
    if (direction != 'U') direction = 'U';
}

function turnDown() {
    if (direction != 'D') direction = 'D';
}
```

You can use these functions to control the Chandrayaan 3 spacecraft based on the commands received.

---

## Project Architecture

Below is a simplified diagram to illustrate the project architecture:

```
Project Root
├── modules
│   ├── spacecraftController.js
│   ├── moveForward.js
│   ├── moveBackward.js
│   ├── turnUp.js
│   ├── turnDown.js
│   ├── turnRight.js
│   └── turnLeft.js
├── test
│   ├── spacecraftController.test.js
│   └── UnitTests
│       ├── moveForward.test.js
│       ├── moveBackward.test.js
│       ├── turnUp.test.js
│       ├── turnDown.test.js
│       ├── turnRight.test.js
│       └── turnLeft.test.js
└── README.md
```

This diagram represents the folder structure of the project, with modules in the `modules` folder and corresponding test files in the `test` folder, including the `UnitTests` subfolder. This organization ensures that each module is thoroughly tested using Jest.

The project structure is organized as follows:

### Modules Folder

The `modules` folder contains the core logic and functionality of the project. It consists of the following files:

1. `spacecraftController.js`: This file handles the main command execution logic for a spacecraft.

2. `moveForward.js`: Contains the logic for moving the spacecraft forward.

3. `moveBackward.js`: Contains the logic for moving the spacecraft backward.

4. `turnUp.js`: Contains the logic for turning the spacecraft upwards.

5. `turnDown.js`: Contains the logic for turning the spacecraft downwards.

6. `turnRight.js`: Contains the logic for turning the spacecraft to the right.

7. `turnLeft.js`: Contains the logic for turning the spacecraft to the left.

### Test Folder

The `test` folder contains files related to testing the project. It consists of the following files:

1. `spacecraftController.test.js`: This file contains test cases for the `spacecraftController.js` module.

### UnitTests Folder

The `UnitTests` folder is a subfolder within the `test` directory and contains individual test files for each module in the `modules` folder. Each module has its corresponding test file:

1. `moveForward.test.js`: Contains test cases for the `moveForward.js` module.

2. `moveBackward.test.js`: Contains test cases for the `moveBackward.js` module.

3. `turnUp.test.js`: Contains test cases for the `turnUp.js` module.

4. `turnDown.test.js`: Contains test cases for the `turnDown.js` module.

5. `turnRight.test.js`: Contains test cases for the `turnRight.js` module.

6. `turnLeft.test.js`: Contains test cases for the `turnLeft.js` module.


---
## Key Outcomes
1. Initial Test Suite: To kickstart the project, I began by creating an initial test suite consisting of 33 test cases. These test cases were carefully designed to cover various aspects of the Spacecraft's functionality.

2. Failed Test Cases: In accordance with TDD principles, I initially ran the test suite, expecting all tests to fail since I had not yet implemented any code. The purpose of this step was to identify what was missing in the codebase.

3. Code Implementation: After the initial test suite confirmed the absence of code, I started implementing the required functionality of Spacecraft. During this phase, I adhered to the principles of writing clean, modular, and maintainable code.

4. Refactoring Process: Once I had a working version of the code, I conducted iterative rounds of refactoring. This involved revisiting the code and making improvements to enhance code quality, readability, and efficiency while ensuring all tests still passed. The refactoring process was vital for long-term code maintainability.

5. Test Execution and Validation: After each refactoring iteration, I reran the test suite to ensure that the changes did not introduce any regressions. This helped maintain confidence in the correctness of the codebase.

6. All Tests Passed: After multiple iterations of implementing and refactoring, I successfully achieved a state where all 33 test cases passed without failures or errors. This marked the completion of the project.

Here are some of the process outcomes Images

![Screenshot (57)](https://github.com/dhruv2x/Incubyte_TDD_Assessment/assets/84621641/a62c364c-fb70-46aa-829f-6c92bb19468c)

![Screenshot (61)](https://github.com/dhruv2x/Incubyte_TDD_Assessment/assets/84621641/445335e5-5060-4aff-ac49-35ac9c5c31d5)

---
Final Outcome


![Screenshot (60)](https://github.com/dhruv2x/Incubyte_TDD_Assessment/assets/84621641/c4cb4a19-7d79-4978-9ac4-4eb830825879)

