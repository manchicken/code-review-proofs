# code-review-proofs
This is a repository where I put proofs used in code reviews in such. None of this code is useful for any purpose outside of receiving my PR.

## JavaScript

### `parseInt()`

```
  console.debug
    0 -> «0»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    1 -> «1»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    0 -> «0»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    1 -> «1»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    one two three -> «NaN»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    1,200,300 -> «1»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    1234 -> «1234»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    1 horse -> «1»

      at debug (parseInt-deficiencies.test.js:13:13)

  console.debug
    horse 123 -> «NaN»
```
