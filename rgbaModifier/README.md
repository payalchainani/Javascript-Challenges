## rgbaModifier

rgbaModifier is a function that takes three arguments, a rgba string, a percent value and an opacity. The function should modify each of the RGB values by the given percentage and apply the new opacity.

The percentage can also be a negative number. E.g. a percentage of 50 should increase each RGB value by 50%, and a percentage of -50 should decrease each RGB value by 50%.

RGB values should be rounded integers and should not be above 225 or below 0.

##### examples



```javascript
    rgbaModifier('rgba(100,100,100,0.6)', 50, 1);
    // -> 'rgba(150,150,150,1)'
```

```javascript
    rgbaModifier('rgba(50,100,20,0.6)', 20, 0.4);
    // -> 'rgba(60,120,24,0.4)'
```

```javascript
    rgbaModifier('rgba(44,70,180,0.9)', -30, 0.3);
    // -> 'rgba(31,49,126,0.3)'
```

```javascript
    rgbaModifier('rgba(225,60,160,1)', 90, 0.7);
    // -> 'rgba(255,114,255,0.7)'
```

```javascript
    rgbaModifier('rgba(50,78,12,0.8)', -100, 0.5);
    // -> 'rgba(0,0,0,0.5)'
```
