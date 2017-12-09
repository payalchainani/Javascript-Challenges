## Sentence to upper or lower CamelCase

The challenge is to implement a function which takes a sentence and converts it to upper or lower camel case

The function takes two arguments; the sentence, and a boolean true if UpperCamelCase is to be returned and false if lowerCamelCase is to be returned

##### examples

You can use these examples to start building up your test suite

```javascript
    sentenceToCamelCase("this sentence", true);
    // -> ThisSentence
```

```javascript
    sentenceToCamelCase("this sentence", false);
    // -> thisSentence
```

```javascript
    sentenceToCamelCase("This Bigger strange Sentence", true);
    // -> ThisBiggerStrangeSentence
```

For a further challenge extend your current function or implement another in the same file which takes CamelCase and returns it as a plain english sentence (ending in a full stop).

```javascript
    camelToEnglish("thisBiggerStrangeSentence");
    // -> This bigger strange sentence.
```
