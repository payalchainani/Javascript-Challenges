## SUB ARRAY SUM ##

The maximum sum subarray problem consists of finding the maximum sum of any subsequence of consecutive numbers in an array or list of integers.

 When the list is made up of only positive numbers then the maximum sum is simply the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

 If a list contains positive and negative numbers then you will need to work out which subsequence can be added together to give the highest total.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


## Examples ##

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    // should be 6: [4, -1, 2, 1];

maxSequence([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])
    // should be 36: [9, 8, 7, -3, 6, 5, 4];

maxSequence([5, -6, 2, 9, -4, -3, 8, -10, 20])
    // should be 22: [5, -6, 2, 9, -4, -3, 8, -10, 20];
