var finances = [
['Jan-2010', 867884],//finances[0]
['Feb-2010', 984655],//finances[1][1]
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-201e0', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099] //finances [85][1]
];

console.log('Financial Analysis');
console.log('-----------------------');
//question 1: The total number of months included in the dataset.
console.log('Total Months'+ ': ' + finances.length);

//question 2:The net total amount of Profit/Losses over the entire period.
var total=0;
for (i=0; i<finances.length; i++) {;
total= total + finances[i][1];
};
console.log('Total'+ ': $'+ total);

//question 3: The average of the changes in Profit/Losses over the entire period.

//3b) Find the total of changes in Profit/Losses and divide by the length of array to find the average.
var total=0;
for (i=0; i<finances.length-1; i++) {;
    total=total+finances[i][1]-finances[i+1][1];
};
average=total/finances.length;
console.log('Average change'+ ': $' + Math.round(average));

//question 4: Greatest Increase in Profits: Feb-2012 ($)
//var highestEarning=0;
//highestEarning= Math.max(...financeChanges);
//console.log(highestEarning);

//how about the date?

  function findLargestIncrease(arr) {
    let month = arr[0];
    let maxDiff = -1;  // initialize maxDiff to a very small negative number
    for (let i = 1; i < arr.length; i++) {  // start the loop at index 1
      let diff = arr[i][1] - arr[i - 1][1];  // calculate the difference between the current element and the previous element
      if (diff > maxDiff) {  // if the difference is larger than the current maxDiff
        maxDiff = diff;  // update maxDiff to be the new larger difference
        month= arr[i];
      }
    }
    return [month[0], maxDiff]
  }

  let maxIncrease = findLargestIncrease(finances);
  console.log(maxIncrease);

  

  /*function findLargestIncrease(finances) {
    let maxDiff = -1;  // initialize maxDiff to a very small negative number
    for (let i = 1; i < finances.length; i++) {  // start the loop at index 1
      let diff = finances[i] - finances[i - 1];  // calculate the difference between the current element and the previous element
      if (diff > maxDiff) {  // if the difference is larger than the current maxDiff
        maxDiff = diff;  // update maxDiff to be the new larger difference
      }
    }
    return maxDiff;
  }

  let maxIncrease= findLargestIncrease(finances);
  console.log(maxIncrease);




  
/*attempt 1
/for(i=0; i<finances.length-1; i++);{
if (finances[i]-finances[i+1]==highestEarning) {
} return (console.log(i));
}

/*attempt2
for(i=0; i<finances.length-1; i++);{
    if (financeChanges[i]==highestEarning) {
    } else (console.log(i));
    }

*/
//console.log(financeChanges[1])
//console.log(financeChanges[2])
//console.log(financeChanges[3])
//console.log(financeChanges[4])
//console.log(financeChanges[5])
//until... 
//console.log (financeChanges[85])

//I want to work out which [i] in financeChanges[i] = highestEarning (2196167)
// I get 85 but financeChanges[85]= not 

//question 5: Greatest Decrease in Profits: Sep-2013 ($-)



// Google "how to find minimum value of an array in javascript"

//var lowestEarning=0;
//lowestEarning= Math.min(...financeChanges);
//console.log(lowestEarning);

//for(i=0; i<finances.length-1; i++);{
    //if (financeChanges[i]==lowestEarning) {
   // } else (console.log(i));
    //}

    //3a) Find the changes in Profit/Losses by month.
//let financeChanges=[];
//for (i=0; i<finances.length-1; i++) {;
//financeChanges.push([finances[i][1]-finances[i+1][1]]);
//}