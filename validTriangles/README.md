# Valid Triangles

For this kata you need to create a function that takes an array of triangles. Each triangle is represented as an array e.g. `[10, 12, 22]` where the three numbers are the sides of the triangle. The function should return the count of triangles that are valid.

To be a valid triangle, the sum of any two sides must be larger than the remaining side

For example:

```
[5, 10, 25] // invalid as 5+10 is not larger than 25
[5, 4, 5] // valid as 5+4 > 5, 4+5 > 5 and 5+5 > 4
```

Ideas for triangles for testing:

```
542  586  419 // valid
829  272  126
660  514  367 // valid
 39  703  839
229  861    2
235  952  840 // valid
892  533  108
```

You can use these examples to start building up your test suite:

```
validTriangles([])
  // -> 0
```

```
validTriangles([[5, 10, 25]])
  // -> 0
```

```
validTriangles([[5, 4, 5]])
  // -> 1
```

```
validTriangles([[5, 10, 25], [5, 4, 5]])
  // -> 1
```
