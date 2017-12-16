## Cash up the cafe's till at the end of the day

The challenge is to implement a function which cashes up a till at the end of the day. The function should always return a string.

##### examples

The till can contain the following denominations:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 coin
£2 coin
£5 note
£10 note
£20 note
£50 note

The till contents should be a javascript object which looks like this:

```javascript
var till = {
             '1p': 1,
             '2p': 1,
             '5p': 1,
             '10p': 1,
             '20p': 1,
             '50p': 1,
             '£1': 1,
             '£2': 1,
             '£5': 1,
             '£10': 1,
             '£20': 1,
             '£50': 1
           }
```

You can use these examples to start building up your test suite

```javascript
    till({'1p': 1,'2p': 1});
    // -> "£0.03"
```

```javascript
    till({'1p': 1,'2p': 1,'5p': 1,'10p': 1,'20p': 1});
    // -> "£0.38"
```

```javascript
    till({'5p': 1,'10p': 1,'20p': 1,'50p': 1,'£1': 1});
    // -> "£1.85"
```
