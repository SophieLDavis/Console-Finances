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


The greatest decrease in losses (date and amount) over the entire period.


When you open your code in the browser your resulting analysis should look similar to the following:

