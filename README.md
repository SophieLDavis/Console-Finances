# Javascript-Challenge

Your task is to write JavaScript code that analyzes the records to calculate each of the following:


The total number of months included in the dataset.
1. finances.length 

The net total amount of Profit/Losses over the entire period.
1. add up all the numbers, array finances[0][1], finances[1][2]
2. make var total=0
3. for loop ? 
for []
4.total  = total ++ finances[i][1]



The average of the changes in Profit/Losses over the entire period.

You will need to track what the total change in profits are from month to month and then find the average.
(Total/Number of months)

1.To track what the total change in profit month to month...
for loop 

 create new array called it financeChanges to store changes for each months
// loop finances array and calculate the changes
// for i in finances
//   var profitLosses = finances[i][1]
//   financeChanges.push(finances[i+1][1] - finances[i][1])
// Be careful on the last month finances[i+1] will not exist!
// find out the length of financeChanges array
// Calculate the total changes using the same method as the previous question
// Calculate the average

2.

The greatest increase in profits (date and amount) over the entire period.



// The greatest increase in profits (date and amount) over the entire period.
// var highestEarning = 0
// for i in financeChanges
//   compare financeChanges[i] with highestEarning
//   if financeChanges[i] > highestEarning then replace highestEarning with financeChanges[i]
// Or use Math.max() for the amount, or sort from highest to lowest and get the value of the first index
// how about the date?
// Find the index of the maximum element in financeChanges array
// get the month from finance array with the same index that we have found

// The greatest decrease in losses (date and amount) over the entire period.
// Google "how to find minimum value of an array in javascript"
















Message live










When you open your code in the browser your resulting analysis should look similar to the following:

