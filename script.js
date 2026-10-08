// SpendWise - Budget Tracker Script

// Function to collect user input
function getUserInput(promptMessage) {
    let input = prompt(promptMessage);
    let amount = parseFloat(input);

    // Validate input to ensure it is a valid positive number
    while (isNaN(amount) || amount < 0) {
        input = prompt("Invalid input. Please enter a valid non-negative number:\n" + promptMessage);
        amount = parseFloat(input);
    }

    return amount;
}

// Function to calculate remaining budget balance
function calculateRemainingBalance(totalBudget, totalExpenses) {
    return totalBudget - totalExpenses;
}

// Main application driver function
function runSpendWise() {
    console.clear();
    console.log("=== SpendWise Budget Summary ===");

    // Step 1: Store Application Data & Collect User Input
    const totalBudget = getUserInput("Enter your total income/budget ($):");
    const housingExpense = getUserInput("Enter your housing expense ($):");
    const foodExpense = getUserInput("Enter your food expense ($):");
    const transportExpense = getUserInput("Enter your transportation expense ($):");

    // Step 2: Perform Budget Calculations
    const totalExpenses = housingExpense + foodExpense + transportExpense;
    const remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);

    // Step 3: Display Results clearly labeled in the console
    console.log(`Total Monthly Budget:    $${totalBudget.toFixed(2)}`);
    console.log(`-----------------------------------`);
    console.log(`Housing Expense:         $${housingExpense.toFixed(2)}`);
    console.log(`Food Expense:            $${foodExpense.toFixed(2)}`);
    console.log(`Transportation Expense:  $${transportExpense.toFixed(2)}`);
    console.log(`-----------------------------------`);
    console.log(`Total Expenses:          $${totalExpenses.toFixed(2)}`);
    console.log(`Remaining Balance:       $${remainingBalance.toFixed(2)}`);

    // Budget Health Check
    if (remainingBalance < 0) {
        console.warn("⚠️ Warning: You are over budget!");
    } else if (remainingBalance === 0) {
        console.log("ℹ️ Notice: You have spent your exact budget amount.");
    } else {
        console.log("✅ Great job! You have remaining funds saved.");
    }
}

// Event Listener to trigger script via button click
document.getElementById('start-btn').addEventListener('click', runSpendWise);

// Auto-run on initial page load
runSpendWise();