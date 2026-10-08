# SpendWise - Personal Budget Tracker

SpendWise is a lightweight web application designed to help users track their income, record daily expenses, and evaluate their remaining balance to manage personal finances effectively.

---

## JavaScript Concepts Implemented

- **Variables (`const`, `let`)**: Used for storing state, user input values, and calculated financial summaries.
- **Data Types & Conversion**: Converting user input strings into floating-point numbers using `parseFloat()`.
- **User Input Collection**: Capturing input dynamically via `prompt()`.
- **Functions & Reusability**: Encapsulating repeatable tasks like input parsing, calculation, and workflow orchestration into modular functions.
- **Control Flow & Conditional Logic**: Utilizing `while` loops for input validation and `if...else` statements for budget health warnings.
- **Console Output**: Formatting data output cleanly using template literals (`${}`) and `toFixed(2)` for currency presentation.

---

## Technical Overview

### 1. How Variables Are Used
Variables hold both temporary input state and overall accounting totals:
- `totalBudget`: Stores the overall income provided by the user.
- `housingExpense`, `foodExpense`, `transportExpense`: Hold individual spending amounts across categories.
- `totalExpenses` & `remainingBalance`: Hold calculated outcomes used in summary checks.

### 2. How User Input Is Collected
User input is collected interactively through browser `prompt()` dialogs wrapped in a custom helper function `getUserInput()`. The function handles input validation using `isNaN()` to ensure only numerical values are accepted for calculations.

### 3. How Calculations Are Performed
Mathematical operators perform financial operations:
- **Total Expenses**: Summed using addition (`housingExpense + foodExpense + transportExpense`).
- **Remaining Balance**: Evaluated via subtraction (`totalBudget - totalExpenses`).

### 4. How Functions Organize Code
Functions separate concerns into modular blocks:
- `getUserInput(promptMessage)`: Handles prompting, type conversion, and error handling for user inputs.
- `calculateRemainingBalance(totalBudget, totalExpenses)`: Isolates calculation logic to maintain pure functional design.
- `runSpendWise()`: Serves as the driver function that controls the overall execution flow from input gathering to console logging.