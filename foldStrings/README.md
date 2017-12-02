## Fold strings

The challenge is to implement a function which takes a string of any length and turns each word inside out while keeping the order of the words intact.

To turn a word inside out the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move.

If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

Your function should also work for strings with spaces.

Remember to start testing with the most basic cases when building up your test suite.



## Examples

```javascript
foldString('code')
// --> 'oced'
```

```javascript
foldString('abcdef')
// --> 'cbafed';
```

```javascript
foldString('javascript')
// --> 'savajtpirc'
```

```javascript
foldString('Northcoders')
// --> 'htroNcsredo'
```

```javascript
foldString('javascript is cool')
// --> 'savajtpirc is oclo'
```
