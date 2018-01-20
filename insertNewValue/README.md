# Insert New Value

The function `insertNewValue` should take a reference to an array and a new value and should return the same array with the new value inserted in the correct position.

The array will contain sorted integers in ascending order.

You must insert the new value at the correct position to maintain the order.

Make sure to test that it is indeed the original array you are modifying and that you are not making a copy.

NB. This is really easy to solve with a for loop, but as you know, this 'simple search' doesn't perform very well with large input sizes. Consider using a binary search method to solve this kata instead.

E.g.

```javascript
const arr = [1, 4, 5, 10];
insertNewValue(arr, 2); // --> [1, 2, 4, 5, 10]

// arr --> [1, 2, 4, 5, 6]
```

```javascript
const arr = [101, 444, 679, 1939, 1988];
insertNewValue(arr, 2033); // --> [101, 444, 679, 1939, 1988, 2033]

// arr -->  [101, 444, 679, 1939, 1988, 2033]
```