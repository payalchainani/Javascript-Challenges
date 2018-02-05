# Fold Array

This function folds an array in the middle ```n``` number of times.

If the list has a odd length, then fold on the middle index (the middle number therefore won't change) other wise you fold in the 'gap' between the two middle integers and so all integers are folded.

To 'fold' the numbers just add them together.

For example:

```
Fold 1-times:
[1,2,3,4,5] -> [6,6,3]
```
Here we fold the 1st with the last and the second with the 4th. As it is odd in length, the middle index is not folded

You can use these examples to start building up your test suite:

```
foldArray([1, 2], 1)
  // -> [3]
```

```
foldArray([1, 2, 3], 1)
  // -> [4, 2]
```

```
foldArray([1, 2, 3, 10, 34, 100], 1)
  // -> [101, 36, 13]
```

```
foldArray([1, 2, 3, 10, 34, 100], 2)
  // -> [114, 36]
```

```
foldArray([1, 2, 3, 10, 34, 100], 3)
  // -> [150]
```

```
foldArray([1, 2, 3, 10, 34, 100], 4)
  // -> [150]
```

```
foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  // -> [15, 20, 10]
```
