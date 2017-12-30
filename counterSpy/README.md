## Counter Spy

For this kata, you need to write a function called counterSpy. It takes an array of names. The function should return an array containing the names of the people who aren't spies.

Recent intelligence has revealed that all spies codenames include the letters 's', 'p' or 'y'. You can't afford to take any chances, and all names that include those letters should be removed. 



EXAMPLES: 

```javascript
counterSpy(['Daryl']) // should return []
```

```javascript
counterSpy(['Daryl','Harriet','James']) // should return ['Harriet']
```


```javascript
counterSpy(['Sam','Daryl','Chris','Harriet','Mauro']) // should return ['Harriet','Mauro']
```

EXTRA CREDIT: 

Also, our spy admin team have asked that the names come back in alphabetical order, for spy filing purposes. So if you could do that you'd really be saving them a lot of work. Thanks.

EXAMPLES: 

```javascript
counterSpy(['Mauro', 'Harriet']) // should return ['Harriet', 'Mauro']
```

```javascript
counterSpy(['Sam','Harriet','Adrian','Mauro']) // should return ['Adrian', 'Harriet', 'Mauro']
```